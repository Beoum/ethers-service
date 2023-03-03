import { Module } from '@nestjs/common';
import TransactionReceiptService from './transaction-receipt.service';
import TransactionReceiptRepository from './transaction-receipt.repository';
import { ProviderModule } from '../../infrastructure/provider/provider.module';

@Module({
  imports: [ProviderModule],
  providers: [TransactionReceiptService, TransactionReceiptRepository],
  exports: [TransactionReceiptService],
})
export class TransactionReceiptModule {}
