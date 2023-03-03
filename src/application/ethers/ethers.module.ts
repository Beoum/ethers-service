import { Module } from '@nestjs/common';
import { BlockModule } from '../../domain/block/block.module';
import { TransactionReceiptModule } from '../../domain/transaction-receipt/transaction-receipt.module';
import EthersService from './ethers.service';
import { LogModule } from '../../domain/log/log.module';

@Module({
  imports: [BlockModule, TransactionReceiptModule, LogModule],
  providers: [EthersService],
  exports: [EthersService],
})
export class EthersModule {}
