import { Injectable } from '@nestjs/common';

@Injectable()
export default class InMemoryCache {
  private static cache: { [key: string]: any };
  private readonly baseKey: string;

  constructor(baseKey: string) {
    if (!InMemoryCache.cache) {
      InMemoryCache.cache = {};
    }
    this.baseKey = baseKey;
  }

  set(key: string, target: any): void {
    InMemoryCache.cache[`${this.baseKey}${key}`] = target;
  }

  get(key): any {
    return InMemoryCache.cache[`${this.baseKey}${key}`];
  }
}
