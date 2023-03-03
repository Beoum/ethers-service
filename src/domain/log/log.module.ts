import { Module } from '@nestjs/common';
import LogService from './log.service';
import LogRepository from './log.repository';
import { ProviderModule } from '../../infrastructure/provider/provider.module';

@Module({
  imports: [ProviderModule],
  providers: [LogService, LogRepository],
  exports: [LogService],
})
export class LogModule {}
