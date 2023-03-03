import { Module } from '@nestjs/common';
import { EthersModule } from './application/ethers/ethers.module';
import BlockController from './presantation/block.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/.env.${process.env.NODE_ENV ?? 'local'}`,
    }),
    EthersModule,
  ],
  controllers: [BlockController],
  providers: [],
})
export class AppModule {}
