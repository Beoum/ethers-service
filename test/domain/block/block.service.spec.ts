import BlockService from '../../../src/domain/block/block.service';
import { Test, TestingModule } from '@nestjs/testing';
import BlockFixture from '../../fixture/block.fixture';
import Block from 'src/domain/block/block.entity';
import { BlockModule } from '../../../src/domain/block/block.module';

describe('BlockService', () => {
  let blockService: BlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BlockModule],
    }).compile();
    blockService = module.get<BlockService>(BlockService);
  });

  describe('findCurrentBlock()', () => {
    it('조회에_성공한다', async () => {
      const blockFixture: Block = new BlockFixture().build();
      jest.spyOn(blockService, 'findCurrent').mockResolvedValue(blockFixture);

      const block: Block = await blockService.findCurrent();

      expect(block).not.toBe(null);
      expect(block.hash).toEqual(blockFixture.hash);
      expect(block.transactions.length).toEqual(
        blockFixture.transactions.length,
      );
      expect(block.gasUsed).toEqual(blockFixture.gasUsed);
      expect(block.miner).toEqual(blockFixture.miner);
      expect(block.number).toEqual(blockFixture.number);
      expect(block.parentHash).toEqual(blockFixture.parentHash);
      expect(block.timestamp).toEqual(blockFixture.timestamp);
    });
  });

  describe('findCurrentBlock()', () => {
    it('조회에_성공한다', async () => {
      const blockFixture: Block = new BlockFixture().build();
      jest.spyOn(blockService, 'findOneByHash').mockResolvedValue(blockFixture);

      const block: Block = await blockService.findOneByHash(blockFixture.hash);

      expect(block).not.toBe(null);
      expect(block.hash).toEqual(blockFixture.hash);
      expect(block.transactions.length).toEqual(
        blockFixture.transactions.length,
      );
      expect(block.gasUsed).toEqual(blockFixture.gasUsed);
      expect(block.miner).toEqual(blockFixture.miner);
      expect(block.number).toEqual(blockFixture.number);
      expect(block.parentHash).toEqual(blockFixture.parentHash);
      expect(block.timestamp).toEqual(blockFixture.timestamp);
    });
  });
});
