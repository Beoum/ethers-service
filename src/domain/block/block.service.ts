import { Injectable } from '@nestjs/common';
import BlockRepository from './block.repository';
import Block from './block.entity';

@Injectable()
export default class BlockService {
  constructor(private readonly blockRepository: BlockRepository) {}

  async findOneByHash(hash: string): Promise<Block> {
    return this.findOneByHashOrThrow(hash);
  }

  async findCurrent(): Promise<Block> {
    const currentHash: string = await this.blockRepository.findCurrentHash();
    return this.findOneByHashOrThrow(currentHash);
  }

  private async findOneByHashOrThrow(hash: string): Promise<Block> {
    const block: Block = await this.blockRepository.findBlockByHash(hash);
    if (!block) {
      throw new Error('block is empty');
    }
    return block;
  }
}
