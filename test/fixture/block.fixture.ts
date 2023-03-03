import Block from '../../src/domain/block/block.entity';

export default class BlockFixture {
  private hash =
    '0x8462eb2fbcef5aa4861266f59ad5f47b9aa6525d767d713920fdbdfb6b0c0b78';
  private parentHash =
    '0x8462eb2fbcef5aa4861266f59ad5f47b9aa6525d767d713920fdbdfb6b0c0b78';
  private number = 9843476;
  private timestamp = 1439799168;
  private gasUsed = BigInt(21000);
  private miner = '0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8';
  private transactions = [
    '0x6f12399cc2cb42bed5b267899b08a847552e8c42a64f5eb128c1bcbd1974fb0c',
  ];

  withHash(hash: string): BlockFixture {
    this.hash = hash;
    return this;
  }

  withParentHash(parentHash: string): BlockFixture {
    this.parentHash = parentHash;
    return this;
  }

  withNumber(number: number): BlockFixture {
    this.number = number;
    return this;
  }

  withTimestamp(timestamp: number): BlockFixture {
    this.timestamp = timestamp;
    return this;
  }

  withGasUsed(gasUsed: bigint): BlockFixture {
    this.gasUsed = gasUsed;
    return this;
  }

  withMiner(miner: string): BlockFixture {
    this.miner = miner;
    return this;
  }

  withTransactions(transactions: string[]): BlockFixture {
    this.transactions = transactions;
    return this;
  }

  build(): Block {
    return new Block(
      this.hash,
      this.parentHash,
      this.number,
      this.timestamp,
      this.gasUsed,
      this.miner,
      this.transactions,
    );
  }
}
