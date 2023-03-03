import Log from '../../src/domain/log/log.entity';

export default class LogFixture {
  private blockNumber = 5196629;
  private blockHash =
    '0x19b083ee0752347f0bba9cd1cf19c827fd108c0f5d4973e33719d97a60cf14ca';
  private removed = false;
  private address = '0xF92298d72afE68300EA065c0EdaDbb1A29804faa';
  private data =
    '0x00000000000000000000000000000000000000000000021e19e0c9bab2400000';
  private topics = [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  ];
  private transactionHash =
    '0xdad8bc380240548aafecba06bf6cee898513da850bb37859cfea5f93d8dd25da';
  private transactionIndex = 1;

  withBlockNumber(blockNumber: number): LogFixture {
    this.blockNumber = blockNumber;
    return this;
  }

  withBlockHash(blockHash: string): LogFixture {
    this.blockHash = blockHash;
    return this;
  }

  withRemoved(removed: boolean): LogFixture {
    this.removed = removed;
    return this;
  }

  withAddress(address: string): LogFixture {
    this.address = address;
    return this;
  }

  withData(data: string): LogFixture {
    this.data = data;
    return this;
  }

  withTopics(topics: string[]): LogFixture {
    this.topics = topics;
    return this;
  }

  withTransactionHash(transactionHash: string): LogFixture {
    this.transactionHash = transactionHash;
    return this;
  }

  withTransactionIndex(transactionIndex: number): LogFixture {
    this.transactionIndex = transactionIndex;
    return this;
  }

  build(): Log {
    return new Log(
      this.blockNumber,
      this.blockHash,
      this.removed,
      this.address,
      this.data,
      this.topics,
      this.transactionHash,
      this.transactionIndex,
    );
  }
}
