import { Injectable } from '@nestjs/common';
import LogRepository from './log.repository';
import Log from './log.entity';

@Injectable()
export default class LogService {
  constructor(private readonly logRepository: LogRepository) {}

  async findByBlockHash(hash: string): Promise<Log[]> {
    return this.logRepository.findByBlockHash(hash);
  }
}
