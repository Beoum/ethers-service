export default class TransactionReceipt {
  readonly to: string;
  readonly from: string;
  readonly contractAddress: string;
  readonly type: number;
  readonly gasUsed: bigint;
  readonly blockHash: string;
  readonly blockNumber: number;
  readonly status: number; // 1: success, 2:revert
  readonly hash: string;

  constructor(
    to: string,
    from: string,
    contractAddress: string,
    type: number,
    gasUsed: bigint,
    blockHash: string,
    blockNumber: number,
    status: number,
    hash: string,
  ) {
    if (typeof to !== 'string' && to !== null) {
      throw new Error('to must be string or null');
    }
    if (typeof from !== 'string') {
      throw new Error('from must be string');
    }
    if (contractAddress !== null && typeof contractAddress !== 'string') {
      throw new Error('contractAddress must be string or null');
    }
    if (typeof type !== 'number') {
      throw new Error('type must be number');
    }
    if (typeof gasUsed !== 'bigint') {
      throw new Error('gasUsed must be bigint');
    }
    if (typeof blockHash !== 'string') {
      throw new Error('blockHash must be string');
    }
    if (typeof blockNumber !== 'number') {
      throw new Error('blockNumber must be number');
    }
    if (typeof status !== 'number') {
      throw new Error('status must be number');
    }
    if (typeof hash !== 'string') {
      throw new Error('hash must be string');
    }
    this.to = to;
    this.from = from;
    this.contractAddress = contractAddress;
    this.type = type;
    this.gasUsed = gasUsed;
    this.blockHash = blockHash;
    this.blockNumber = blockNumber;
    this.status = status;
    this.hash = hash;
  }
}
