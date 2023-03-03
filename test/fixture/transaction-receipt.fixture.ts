import TransactionReceipt from '../../src/domain/transaction-receipt/transaction-receipt.entity';

export default class TransactionReceiptFixture {
  private to: string = null;
  private from = '0x8ba1f109551bD432803012645Ac136ddd64DBA72';
  private contractAddress = '0x733aF852514e910E2f8af40d61E00530377889E9';
  private type = 0;
  private gasUsed = BigInt(443560);
  private blockHash =
    '0x8a179bc6cb299f936c4fd614995e62d597ec6108b579c23034fb220967ceaa94';
  private blockNumber = 12598244;
  private status = 1;
  private hash =
    '0x5b73e239c55d790e3c9c3bbb84092652db01bb8dbf49ccc9e4a318470419d9a0';

  withTo(to: string): TransactionReceiptFixture {
    this.to = to;
    return this;
  }

  withFrom(from: string): TransactionReceiptFixture {
    this.from = from;
    return this;
  }

  withContractAddress(contractAddress: string): TransactionReceiptFixture {
    this.contractAddress = contractAddress;
    return this;
  }

  withType(type: number): TransactionReceiptFixture {
    this.type = type;
    return this;
  }

  withGasUsed(gasUsed: bigint): TransactionReceiptFixture {
    this.gasUsed = gasUsed;
    return this;
  }

  withBlockHash(blockHash: string): TransactionReceiptFixture {
    this.blockHash = blockHash;
    return this;
  }

  withBlockNumber(blockNumber: number): TransactionReceiptFixture {
    this.blockNumber = blockNumber;
    return this;
  }

  withStatus(status: number): TransactionReceiptFixture {
    this.status = status;
    return this;
  }

  withHash(hash: string): TransactionReceiptFixture {
    this.hash = hash;
    return this;
  }

  build(): TransactionReceipt {
    return new TransactionReceipt(
      this.to,
      this.from,
      this.contractAddress,
      this.type,
      this.gasUsed,
      this.blockHash,
      this.blockNumber,
      this.status,
      this.hash,
    );
  }
}
