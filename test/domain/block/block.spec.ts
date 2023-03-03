import Block from 'src/domain/block/block.entity';
import BlockFixture from '../../fixture/block.fixture';

describe('Block', () => {
  describe('hash', () => {
    it('hash는_DataHexString<32>이다 ', () => {
      const block: Block = new BlockFixture()
        .withHash(
          '0x8462eb2fbcef5aa4861266f59ad5f47b9aa6525d767d713920fdbdfb6b0c0b78',
        )
        .build();
      expect(block).not.toBe(null);
    });
    it('hash는_null이_아니다', () => {
      expect(() => {
        new BlockFixture().withHash(null).build();
      }).toThrowError();
    });
    it('hash는_undefined가_아니다', () => {
      expect(() => {
        new BlockFixture().withHash(undefined).build();
      }).toThrowError();
    });
    it('hash는_임의의string이_아니다', () => {
      expect(() => {
        new BlockFixture().withHash('service-homework').build();
      }).toThrowError();
    });
  });

  describe('parentHash', () => {
    it('parentHash는_DataHexString<32>이다 ', () => {
      const block: Block = new BlockFixture()
        .withParentHash(
          '0x8462eb2fbcef5aa4861266f59ad5f47b9aa6525d767d713920fdbdfb6b0c0b78',
        )
        .build();
      expect(block).not.toBe(null);
    });
    it('parentHash는_null이_아니다', () => {
      expect(() => {
        new BlockFixture().withParentHash(null).build();
      }).toThrowError();
    });
    it('parentHash는_undefined가_아니다', () => {
      expect(() => {
        new BlockFixture().withParentHash(undefined).build();
      }).toThrowError();
    });
    it('parentHash는_임의의string이_아니다', () => {
      expect(() => {
        new BlockFixture().withParentHash('service-homework').build();
      }).toThrowError();
    });
  });

  describe('number', () => {
    it('number는_number형이다', () => {
      const block: Block = new BlockFixture().withNumber(1234567).build();
      expect(block).not.toBe(null);
    });
    it('number는_null이_아니다', () => {
      expect(() => {
        new BlockFixture().withNumber(null).build();
      }).toThrowError();
    });
    it('number는_undefined가_아니다', () => {
      expect(() => {
        new BlockFixture().withNumber(undefined).build();
      }).toThrowError();
    });
  });

  describe('timestamp', () => {
    it('timestamp는_number형이다', () => {
      const block: Block = new BlockFixture().withTimestamp(1234567).build();
      expect(block).not.toBe(null);
    });
    it('timestamp는_null이_아니다', () => {
      expect(() => {
        new BlockFixture().withTimestamp(null).build();
      }).toThrowError();
    });
    it('timestamp는_undefined가_아니다', () => {
      expect(() => {
        new BlockFixture().withTimestamp(undefined).build();
      }).toThrowError();
    });
  });

  describe('gasUsed', () => {
    it('gasUsed는_bigint형이다', () => {
      const block: Block = new BlockFixture()
        .withGasUsed(BigInt(1234567))
        .build();
      expect(block).not.toBe(null);
    });
    it('gasUsed는_null이_아니다', () => {
      expect(() => {
        new BlockFixture().withGasUsed(null).build();
      }).toThrowError();
    });
    it('gasUsed는_undefined가_아니다', () => {
      expect(() => {
        new BlockFixture().withGasUsed(undefined).build();
      }).toThrowError();
    });
  });

  describe('miner', () => {
    it('miner는_string형이다', () => {
      const block: Block = new BlockFixture().withMiner('miner').build();
      expect(block).not.toBe(null);
    });
    it('miner는_null이_아니다', () => {
      expect(() => {
        new BlockFixture().withMiner(null).build();
      }).toThrowError();
    });
    it('miner는_undefined가_아니다', () => {
      expect(() => {
        new BlockFixture().withMiner(undefined).build();
      }).toThrowError();
    });
  });

  describe('transactions', () => {
    it('transactions는_array다', () => {
      const block: Block = new BlockFixture().withTransactions([]).build();
      expect(block).not.toBe(null);
    });
  });
});
