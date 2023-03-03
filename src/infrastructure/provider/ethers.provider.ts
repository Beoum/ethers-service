import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import InMemoryCache from '../cache/in-memory.cache';

@Injectable()
export class EthersProvider {
  private readonly provider: ethers.JsonRpcProvider;
  private readonly cacheMap: { [key: string]: InMemoryCache };

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.ETHERS_PROVIDER_URL);
    this.cacheMap = {};
  }

  getProvider(): ethers.JsonRpcProvider {
    return this.provider;
  }

  getCache(baseKey: string): InMemoryCache {
    if (!this.cacheMap[baseKey]) {
      this.cacheMap[baseKey] = new InMemoryCache(baseKey);
    }
    return this.cacheMap[baseKey];
  }
}
