export default class Log {
  readonly blockNumber: number;
  readonly blockHash: string;
  readonly removed: boolean;
  readonly address: string;
  readonly data: string;
  readonly topics: string[];
  readonly transactionHash: string;
  readonly transactionIndex: number;

  constructor(
    blockNumber: number,
    blockHash: string,
    removed: boolean,
    address: string,
    data: string,
    topics: string[],
    transactionHash: string,
    transactionIndex: number,
  ) {
    if (typeof blockNumber !== 'number') {
      throw new Error('blockNumber must be number type');
    }
    if (typeof blockHash !== 'string') {
      throw new Error('blockHash must be string type');
    }
    if (typeof removed !== 'boolean') {
      throw new Error('removed must be boolean type');
    }
    if (typeof address !== 'string') {
      throw new Error('address must be string type');
    }
    if (typeof data !== 'string') {
      throw new Error('data must be string type');
    }
    this.validateTopics(topics);
    if (typeof transactionHash !== 'string') {
      throw new Error('transactionHash must be string type');
    }
    if (typeof transactionIndex !== 'number') {
      throw new Error('transactionIndex must be number type');
    }

    this.blockNumber = blockNumber;
    this.blockHash = blockHash;
    this.removed = removed;
    this.address = address;
    this.data = data;
    this.topics = topics;
    this.transactionHash = transactionHash;
    this.transactionIndex = transactionIndex;
  }

  private validateTopics(topics: string[]): void {
    if (!Array.isArray(topics)) {
      throw new Error('topics must be array type');
    }
    for (let i = 0; i < topics.length; i++) {
      if (typeof topics[i] !== 'string') {
        throw new Error('topics element must be string type');
      }
    }
  }
}
