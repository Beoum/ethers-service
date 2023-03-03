import { Injectable } from '@nestjs/common';
import BlockService from '../../domain/block/block.service';
import Block from '../../domain/block/block.entity';
import TransactionReceiptService from '../../domain/transaction-receipt/transaction-receipt.service';
import { BlockDto, EthersDto } from './ethers.dto';
import LogService from '../../domain/log/log.service';

@Injectable()
export default class EthersService {
  constructor(
    private readonly blockService: BlockService,
    private readonly transactionReceiptService: TransactionReceiptService,
    private readonly logService: LogService,
  ) {}

  async findOneBlock(hash?: string): Promise<BlockDto> {
    const block: Block = await this.findBlockByHashOrCurrent(hash);
    const [receipts, logs] = await Promise.all([
      this.transactionReceiptService.findByHash(block.transactions),
      this.logService.findByBlockHash(block.hash),
    ]);

    return EthersDto.Block(block, receipts, logs);
  }

  private async findBlockByHashOrCurrent(hash?: string): Promise<Block> {
    if (typeof hash === 'string') {
      return this.blockService.findOneByHash(hash);
    } else if (!hash) {
      return this.blockService.findCurrent();
    }
    throw new Error('hash must be string or empty');
  }
}
