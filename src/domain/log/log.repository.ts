import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import Log from './log.entity';
import { EthersProvider } from '../../infrastructure/provider/ethers.provider';

@Injectable()
export default class LogRepository {
  constructor(private readonly ethersProvider: EthersProvider) {}

  private readonly provider = this.ethersProvider.getProvider();
  private readonly cache = this.ethersProvider.getCache('LOG_');

  async findByBlockHash(blockHash: string): Promise<Log[]> {
    const cachedLog: Log[] = this.cache.get(blockHash);
    if (cachedLog) return cachedLog;

    const ethersLog: ethers.Log[] = await this.provider.getLogs({ blockHash });
    const log: Log[] = ethersLog.map(this.toLog);

    this.cache.set(blockHash, log);

    return log;
  }

  private toLog(log: ethers.Log): Log {
    return new Log(
      log.blockNumber,
      log.blockHash,
      log.removed,
      log.address,
      log.data,
      [...log.topics],
      log.transactionHash,
      log.transactionIndex,
    );
  }
}
