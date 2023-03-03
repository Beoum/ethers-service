import TransactionReceipt from '../../domain/transaction-receipt/transaction-receipt.entity';
import Block from '../../domain/block/block.entity';
import Log from '../../domain/log/log.entity';

export interface BlockDto {
  block: Block;
  transactionReceipts: TransactionReceipt[];
  logs: Log[];
}
export class EthersDto {
  public static Block(
    block: Block,
    transactionReceipts: TransactionReceipt[],
    logs: Log[],
  ): BlockDto {
    return {
      block,
      transactionReceipts,
      logs,
    };
  }
}
