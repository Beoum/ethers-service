import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import Block from './block.entity';
import { EthersProvider } from '../../infrastructure/provider/ethers.provider';

@Injectable()
export default class BlockRepository {
  constructor(private readonly ethersProvider: EthersProvider) {}

  private readonly provider = this.ethersProvider.getProvider();
  private readonly cache = this.ethersProvider.getCache('BLOCK_');

  async findCurrentHash(): Promise<string> {
    const currentNumber = await this.provider.getBlockNumber();
    const ethersBlock: ethers.Block = await this.provider.getBlock(
      currentNumber,
    );
    const block: Block = this.toBlock(ethersBlock);

    this.cache.set(block.hash, block);

    return block.hash;
  }

  async findBlockByHash(hash: string): Promise<Block> {
    const cachedBlock: Block = this.cache.get(hash);
    if (cachedBlock) return cachedBlock;
    const ethersBlock: ethers.Block = await this.provider.getBlock(hash);
    const block: Block = this.toBlock(ethersBlock);

    this.cache.set(hash, block);

    return block;
  }

  private toBlock(block: ethers.Block): Block {
    return new Block(
      block.hash,
      block.parentHash,
      block.number,
      block.timestamp,
      block.gasUsed,
      block.miner,
      [...block.transactions],
    );
  }
}
