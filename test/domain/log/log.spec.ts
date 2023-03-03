import Log from 'src/domain/log/log.entity';
import LogFixture from '../../fixture/log.fixture';

describe('Log', () => {
  describe('blockNumber', () => {
    it('blockNumber는_number다', () => {
      const log: Log = new LogFixture().withBlockNumber(345678).build();
      expect(log).not.toBe(null);
    });
    it('blockNumber는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withBlockNumber(null).build();
      }).toThrowError();
    });
    it('blockNumber는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withBlockNumber(undefined).build();
      }).toThrowError();
    });
  });

  describe('blockHash', () => {
    it('blockHash는_string이다', () => {
      const log: Log = new LogFixture()
        .withBlockHash('homework-service')
        .build();
      expect(log).not.toBe(null);
    });
    it('blockHash는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withBlockHash(null).build();
      }).toThrowError();
    });
    it('blockHash는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withBlockHash(undefined).build();
      }).toThrowError();
    });
  });

  describe('removed', () => {
    it('removed는_boolean이다', () => {
      const log: Log = new LogFixture().withRemoved(true).build();
      expect(log).not.toBe(null);
    });
    it('removed는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withRemoved(null).build();
      }).toThrowError();
    });
    it('removed는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withRemoved(undefined).build();
      }).toThrowError();
    });
  });

  describe('address', () => {
    it('address는_string이다', () => {
      const log: Log = new LogFixture().withAddress('homework-service').build();
      expect(log).not.toBe(null);
    });
    it('address는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withAddress(null).build();
      }).toThrowError();
    });
    it('address는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withAddress(undefined).build();
      }).toThrowError();
    });
  });

  describe('data', () => {
    it('data는_string이다', () => {
      const log: Log = new LogFixture().withData('homework-service').build();
      expect(log).not.toBe(null);
    });
    it('data는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withData(null).build();
      }).toThrowError();
    });
    it('data는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withData(undefined).build();
      }).toThrowError();
    });
  });

  describe('topics', () => {
    it('topics는_array다', () => {
      const log: Log = new LogFixture()
        .withTopics(['homework-service'])
        .build();
      expect(log).not.toBe(null);
    });
    it('topics는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withTopics(null).build();
      }).toThrowError();
    });
    it('topics는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withTopics(undefined).build();
      }).toThrowError();
    });
  });

  describe('transactionHash', () => {
    it('transactionHash는_string이다', () => {
      const log: Log = new LogFixture()
        .withTransactionHash('homework-service')
        .build();
      expect(log).not.toBe(null);
    });
    it('transactionHash는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withTransactionHash(null).build();
      }).toThrowError();
    });
    it('transactionHash는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withTransactionHash(undefined).build();
      }).toThrowError();
    });
  });

  describe('transactionIndex', () => {
    it('transactionIndex는_number다', () => {
      const log: Log = new LogFixture().withTransactionIndex(123456).build();
      expect(log).not.toBe(null);
    });
    it('transactionIndex는_null이_아니다', () => {
      expect(() => {
        new LogFixture().withTransactionIndex(null).build();
      }).toThrowError();
    });
    it('transactionIndex는_undefined가_아니다', () => {
      expect(() => {
        new LogFixture().withTransactionIndex(undefined).build();
      }).toThrowError();
    });
  });
});
