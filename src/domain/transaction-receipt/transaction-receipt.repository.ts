import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import TransactionReceipt from './transaction-receipt.entity';
import { EthersProvider } from '../../infrastructure/provider/ethers.provider';

@Injectable()
export default class TransactionReceiptRepository {
  constructor(private readonly ethersProvider: EthersProvider) {}

  private readonly provider = this.ethersProvider.getProvider();
  private readonly cache = this.ethersProvider.getCache('RECEIPT_');

  async findOneByHash(hash: string): Promise<TransactionReceipt> {
    const cachedReceipt: TransactionReceipt = this.cache.get(hash);
    if (cachedReceipt) return cachedReceipt;
    const ethersReceipt: ethers.TransactionReceipt =
      await this.provider.getTransactionReceipt(hash);
    const receipt: TransactionReceipt = this.toReceipt(ethersReceipt);

    this.cache.set(hash, receipt);

    return receipt;
  }

  async findByHash(hash: string[]): Promise<TransactionReceipt[]> {
    const promises = hash.map((t) => this.findOneByHash(t));
    return Promise.all(promises);
  }

  private toReceipt(receipt: ethers.TransactionReceipt): TransactionReceipt {
    return new TransactionReceipt(
      receipt.to,
      receipt.from,
      receipt.contractAddress,
      receipt.type,
      receipt.gasUsed,
      receipt.blockHash,
      receipt.blockNumber,
      receipt.status,
      receipt.hash,
    );
  }
}
