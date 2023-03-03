import { Injectable } from '@nestjs/common';
import TransactionReceiptRepository from './transaction-receipt.repository';
import TransactionReceipt from './transaction-receipt.entity';

@Injectable()
export default class TransactionReceiptService {
  constructor(
    private readonly transactionReceiptRepository: TransactionReceiptRepository,
  ) {}

  async findByHash(hash: string[]): Promise<TransactionReceipt[]> {
    return this.transactionReceiptRepository.findByHash(hash);
  }
}
