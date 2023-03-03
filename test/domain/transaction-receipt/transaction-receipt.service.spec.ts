import TransactionReceiptService from '../../../src/domain/transaction-receipt/transaction-receipt.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TransactionReceiptModule } from '../../../src/domain/transaction-receipt/transaction-receipt.module';
import TransactionReceiptFixture from '../../fixture/transaction-receipt.fixture';
import TransactionReceipt from 'src/domain/transaction-receipt/transaction-receipt.entity';

describe('TransactionReceiptService', () => {
  let transactionReceiptService: TransactionReceiptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TransactionReceiptModule],
    }).compile();
    transactionReceiptService = module.get<TransactionReceiptService>(
      TransactionReceiptService,
    );
  });

  describe('findByHash()', () => {
    it('조회에_성공한다', async () => {
      const receiptFixtures: TransactionReceipt[] = [
        new TransactionReceiptFixture().build(),
        new TransactionReceiptFixture().build(),
      ];
      jest
        .spyOn(transactionReceiptService, 'findByHash')
        .mockResolvedValue(receiptFixtures);

      const receipts: TransactionReceipt[] =
        await transactionReceiptService.findByHash(['hash']);

      expect(receipts.length).toEqual(receiptFixtures.length);
    });
  });
});
