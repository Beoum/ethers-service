import LogService from '../../../src/domain/log/log.service';
import { Test, TestingModule } from '@nestjs/testing';
import Log from 'src/domain/log/log.entity';
import LogFixture from '../../fixture/log.fixture';
import { LogModule } from '../../../src/domain/log/log.module';

describe('LogService', () => {
  let logService: LogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LogModule],
    }).compile();
    logService = module.get<LogService>(LogService);
  });

  describe('findByBlockHash', () => {
    it('조회에_성공한다', async () => {
      const logFixtures: Log[] = [
        new LogFixture().build(),
        new LogFixture().build(),
      ];
      jest.spyOn(logService, 'findByBlockHash').mockResolvedValue(logFixtures);

      const logs: Log[] = await logService.findByBlockHash('blockHash');

      expect(logs.length).toEqual(logFixtures.length);
    });
  });
});
