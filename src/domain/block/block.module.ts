import { Module } from '@nestjs/common';
import BlockService from './block.service';
import BlockRepository from './block.repository';
import { ProviderModule } from '../../infrastructure/provider/provider.module';

@Module({
  imports: [ProviderModule],
  providers: [BlockService, BlockRepository],
  exports: [BlockService],
})
export class BlockModule {}
