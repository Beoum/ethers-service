export default class Block {
  readonly hash: string;
  readonly parentHash: string;
  readonly number: number;
  readonly timestamp: number;
  readonly gasUsed: bigint;
  readonly miner: string;
  readonly transactions: string[];

  constructor(
    hash: string,
    parentHash: string,
    number: number,
    timestamp: number,
    gasUsed: bigint,
    miner: string,
    transactions: string[],
  ) {
    this.validateHash(hash);
    this.validateHash(parentHash);
    if (typeof number !== 'number') {
      throw new Error('number must be number type');
    }
    if (typeof timestamp !== 'number') {
      throw new Error('timestamp must be number type');
    }
    if (typeof gasUsed !== 'bigint') {
      throw new Error('gasUsed must be number type');
    }
    if (typeof miner !== 'string') {
      throw new Error('miner must be string type');
    }
    this.validateTransactions(transactions);

    this.hash = hash;
    this.parentHash = parentHash;
    this.number = number;
    this.timestamp = timestamp;
    this.gasUsed = gasUsed;
    this.miner = miner;
    this.transactions = transactions;
  }

  private validateHash(hash: string): void {
    if (typeof hash !== 'string') {
      throw new Error('hash must be number type');
    }
    if (Buffer.from(hash.slice(2), 'hex').length !== 32) {
      throw new Error('hash must be DataHexString<32>');
    }
  }

  private validateTransactions(transactions: string[]): void {
    if (!Array.isArray(transactions)) {
      throw new Error('transactions must be array type');
    }
    for (let i = 0; i < transactions.length; i++) {
      if (typeof transactions[i] !== 'string') {
        throw new Error('transactions element must be string type');
      }
    }
  }
}
