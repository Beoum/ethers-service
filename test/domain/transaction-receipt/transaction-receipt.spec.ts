import TransactionReceipt from 'src/domain/transaction-receipt/transaction-receipt.entity';
import TransactionReceiptFixture from '../../fixture/transaction-receipt.fixture';

describe('TransactionReceipt', () => {
  describe('to', () => {
    it('to는_null이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withTo(null)
        .build();
      expect(tr).not.toBe(null);
    });
    it('to는_string이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withTo('homework-service')
        .build();
      expect(tr).not.toBe(null);
    });
    it('to는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withTo(undefined).build();
      }).toThrowError();
    });
  });

  describe('from', () => {
    it('from는_string이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withFrom('homework-service')
        .build();
      expect(tr).not.toBe(null);
    });
    it('from는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withFrom(undefined).build();
      }).toThrowError();
    });
    it('from는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withFrom(null).build();
      }).toThrowError();
    });
  });

  describe('contractAddress', () => {
    it('contractAddress는_string이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withContractAddress('homework-service')
        .build();
      expect(tr).not.toBe(null);
    });
    it('contractAddress는_null이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withContractAddress(null)
        .build();
      expect(tr).not.toBe(null);
    });
    it('contractAddress는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withContractAddress(undefined).build();
      }).toThrowError();
    });
  });

  describe('type', () => {
    it('type는_number다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withType(12345)
        .build();
      expect(tr).not.toBe(null);
    });
    it('type는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withType(undefined).build();
      }).toThrowError();
    });
    it('type는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withType(null).build();
      }).toThrowError();
    });
  });

  describe('gasUsed', () => {
    it('gasUsed는_number다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withGasUsed(BigInt(12345))
        .build();
      expect(tr).not.toBe(null);
    });
    it('gasUsed는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withGasUsed(undefined).build();
      }).toThrowError();
    });
    it('gasUsed는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withGasUsed(null).build();
      }).toThrowError();
    });
  });

  describe('blockHash', () => {
    it('blockHash는_string이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withBlockHash('homework-service')
        .build();
      expect(tr).not.toBe(null);
    });
    it('blockHash는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withBlockHash(undefined).build();
      }).toThrowError();
    });
    it('blockHash는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withBlockHash(null).build();
      }).toThrowError();
    });
  });

  describe('blockNumber', () => {
    it('blockNumber는_number다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withBlockNumber(12345)
        .build();
      expect(tr).not.toBe(null);
    });
    it('blockNumber는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withBlockNumber(undefined).build();
      }).toThrowError();
    });
    it('blockNumber는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withBlockNumber(null).build();
      }).toThrowError();
    });
  });

  describe('status', () => {
    it('status는_number다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withStatus(1)
        .build();
      expect(tr).not.toBe(null);
    });
    it('status는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withStatus(undefined).build();
      }).toThrowError();
    });
    it('status는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withStatus(null).build();
      }).toThrowError();
    });
  });

  describe('hash', () => {
    it('hash는_string이다', () => {
      const tr: TransactionReceipt = new TransactionReceiptFixture()
        .withHash('homework-service')
        .build();
      expect(tr).not.toBe(null);
    });
    it('hash는_undefined가_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withHash(undefined).build();
      }).toThrowError();
    });
    it('hash는_null이_아니다', () => {
      expect(() => {
        new TransactionReceiptFixture().withHash(null).build();
      }).toThrowError();
    });
  });
});
