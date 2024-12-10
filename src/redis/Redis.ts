/**
 * Copyright ©2021 Dana Basken
 */

import {Utilities} from "@d4lton/node-common";
import log4js from "log4js";
import os from "os";
import {RedisClientType} from "redis";
import {RateLimitError} from "../errors/RateLimitError";
import {RedisPool} from "./RedisPool";

const logger = log4js.getLogger("Redis");

export type RedisSubscriptionCallback = (message: any, topic: string) => void;

export type RedisSubscription = {
  id: number;
  topic: string;
  callback: RedisSubscriptionCallback;
};

type RedisSubscriptionMap = {
  [key: string]: RedisSubscription[];
};

export class Redis {

  private static LOCK_ID = 0;
  private static _hostname?: string;
  private static SUBSCRIPTION_ID = 0;
  private static _subscriber: RedisClientType | undefined;
  private static _subscriptions: RedisSubscriptionMap = {};
  private static _pool: RedisPool = new RedisPool();

  static PRIORITIES = {
    LOW: 1,
    NORMAL: 5,
    HIGH: 10
  };

  constructor() {
  }

  get pool(): RedisPool {
    return Redis._pool;
  }

  /**
   * Get the value for a key.
   */
  async get(key: string): Promise<any> {
    return this.pool.withClient(async client => client.get(key));
  }

  /**
   * Set the value for a key.
   */
  async set(key: string, value: any, timeoutMs = 0, exclusive = false): Promise<any> {
    value = typeof value === "object" ? JSON.stringify(value) : value;
    const options: any = {};
    if (timeoutMs) { options.PX = timeoutMs; }
    if (exclusive) { options.NX = true; }
    return this.pool.withClient(async client => client.set(key, value, options));
  }

  /**
   * Push a value onto the given list key.
   */
  async lpush(key: string, value: any): Promise<any> {
    return this.pool.withClient(async client => client.lPush(key, value));
  }

  async rpush(key: string, value: any): Promise<any> {
    return this.pool.withClient(async client => client.rPush(key, value));
  }

  async lrange(key: string, start: number, stop: number): Promise<any> {
    return this.pool.withClient(async client => client.lRange(key, start, stop));
  }

  /**
   * Remove one or more matching elements from a list.
   */
  async lrem(key: string, count: number, value: any): Promise<any> {
    return this.pool.withClient(async client => client.lRem(key, count, value));
  }

  /**
   * Get the position of the first matching element in a list.
   */
  async lpos(key: string, value: any): Promise<any> {
    return this.pool.withClient(async client => client.lPos(key, value));
  }

  /**
   * Pop value(s) off the given list key.
   */
  async rpop(key: string, count?: number): Promise<any> {
    if (count) {
      return this.pool.withClient(async client => client.rPopCount(key, count));
    } else {
      return this.pool.withClient(async client => client.rPop(key));
    }
  }

  async brpop(key: string, timeoutMs: number = 0): Promise<any> {
    return this.pool.withClient(async client => client.brPop(key, timeoutMs / 1000));
  }

  async llen(key: string): Promise<any> {
    return this.pool.withClient(async client => client.lLen(key));
  }

  async ltrim(key: string, start: number, end: number): Promise<any> {
    return this.pool.withClient(async client => client.lTrim(key, start, end));
  }

  /**
   * Add a value to a Set.
   */
  async sadd(key: string, value: any): Promise<any> {
    value = typeof value === "object" ? JSON.stringify(value) : value;
    return this.pool.withClient(async client => client.sAdd(key, value));
  }

  /**
   * Remove a random value from a Set.
   */
  async spop(key: string): Promise<any> {
    return this.pool.withClient(async client => client.sPop(key));
  }

  /**
   * Remove a value from a Set.
   */
  async srem(key: string, value: any): Promise<any> {
    value = typeof value === "object" ? JSON.stringify(value) : value;
    return this.pool.withClient(async client => client.sRem(key, value));
  }

  /**
   * Get all values from a Set.
   */
  async smembers(key: string): Promise<any> {
    return this.pool.withClient(async client => client.sMembers(key));
  }

  /**
   * Get the number of keys in a Set (aka the Set length).
   */
  async scard(key: string): Promise<any> {
    return this.pool.withClient(async client => client.sCard(key));
  }

  async zadd(key: string, value: any, priority: number = Redis.PRIORITIES.NORMAL): Promise<any> {
    return this.pool.withClient(async client => client.zAdd(key, {score: priority, value: value}, {GT: true}));
  }

  async zpop(key: string): Promise<any> {
    return this.pool.withClient(async client => client.zPopMax(key));
  }

  async zrangebyscore(key: string, priority: number = Redis.PRIORITIES.NORMAL): Promise<any> {
    return this.pool.withClient(async client => client.zRangeByScore(key, "-inf", priority));
  }

  async zrem(key: string, value: any): Promise<any> {
    return this.pool.withClient(async client => client.zRem(key, value));
  }

  async zcard(key: string): Promise<any> {
    return this.pool.withClient(async client => client.zCard(key));
  }

  async bzpop(key: string, timeoutMs: number = 0): Promise<any> {
    return this.pool.withClient(async client => client.bzPopMax(key, timeoutMs / 1000));
  }

  /**
   * Delete a key.
   */
  async del(key: string): Promise<any> {
    return this.pool.withClient(async client => client.del(key));
  }

  /**
   * Get the time-to-live remaining for a key, if any.
   */
  async ttl(key: string): Promise<number> {
    return this.pool.withClient(async client => client.ttl(key));
  }

  /**
   * Get keys matching a pattern.
   */
  async keys(pattern: string): Promise<any> {
    return this.pool.withClient(async client => client.keys(pattern));
  }

  /**
   * Subscribe to an event.
   */
  async subscribe(topic: string, callback: RedisSubscriptionCallback): Promise<RedisSubscription> {
    if (!Redis._subscriber) {
      Redis._subscriber = await RedisPool.client;
    }
    if (!Redis._subscriptions[topic]) {
      Redis._subscriptions[topic] = [];
      await Redis._subscriber.subscribe(topic, Redis._onMessage);
    }
    const subscription: RedisSubscription = {topic: topic, id: Redis.SUBSCRIPTION_ID++, callback: callback};
    Redis._subscriptions[topic].push(subscription);
    return subscription;
  }

  private static async _onMessage(message: any, topic: string): Promise<void> {
    const subscriptions = Redis._subscriptions[topic];
    if (subscriptions) {
      for (const subscription of subscriptions) {
        subscription.callback(message, topic);
      }
    } else {
      logger.warn(`Received message for topic "${topic}", but no subscribers`);
    }
  }

  async unsubscribe(subscription: RedisSubscription): Promise<void> {
    const subscriptions = Redis._subscriptions[subscription.topic];
    if (!subscriptions) {
      logger.warn(`Subscriptions not found for topic "${subscription.topic}"`);
      return;
    }
    Redis._subscriptions[subscription.topic] = Redis._subscriptions[subscription.topic].filter(it => it.id !== subscription.id);
    if (!Redis._subscriptions[subscription.topic].length) {
      delete Redis._subscriptions[subscription.topic];
      await Redis._subscriber?.unsubscribe(subscription.topic);
    }
    if (Utilities.isEmpty(Redis._subscriptions)) {
      await Redis._subscriber?.disconnect();
      Redis._subscriber = undefined;
    }
  }

  /**
   * Publish an event
   */
  async publish(topic: string, message: any): Promise<void> {
    message = typeof message === "object" ? JSON.stringify(message) : message;
    return this.pool.withClient(async client => client.publish(topic, message));
  }

  /**
   * Get a lock for a key.
   */
  async getLock(key: string, wait = true, timeoutMs = 10000, retrySleepMs = 500): Promise<any> {
    const lockKey = `${key}.lock`;
    const lockValue = `${this.hostname}.${process.pid}.${Date.now()}.${++Redis.LOCK_ID}`;
    return new Promise(async (resolve, reject) => {
      const start = Date.now();
      while (Date.now() - start < timeoutMs + retrySleepMs) {
        const result = await this.set(lockKey, lockValue, timeoutMs, true);
        if (result) { return resolve({key: lockKey, value: lockValue}); }
        if (!wait) { return resolve(undefined); }
        await Utilities.sleep(retrySleepMs);
      }
      reject({message: `could not obtain lock for ${key} within ${timeoutMs}ms`});
    });
  }

  /**
   * Unlock a lock.
   */
  async unlock(lock: any): Promise<void> {
    const value = await this.get(lock.key);
    if (!value) {
      logger.warn(`could not unlock ${JSON.stringify(lock)}, doesn't exist`);
      return;
    }
    if (value !== lock.value) {
      logger.warn(`could not unlock ${JSON.stringify(lock)}, mismatch lock value`);
      return;
    }
    await this.del(lock.key);
  }

  /**
   * Get a cached value, creating it if needed.
   */
  async cache(key: string, expireMs: number, waitMs: number, closure: Function): Promise<any> {
    let result = await this.get(key);
    if (Utilities.isSet(result)) { return result; }
    const lock = await this.getLock(key, true, waitMs, waitMs / 100);
    if (lock) {
      try {
        let result = await this.get(key);
        if (!Utilities.isSet(result)) {
          result = await closure();
          if (result === undefined) { return; }
          await this.set(key, result, expireMs);
          return result;
        }
      } finally {
        await this.unlock(lock);
      }
    }
  }

  async limit(baseKey: string, limit: number, resolutionMs: number = 1000): Promise<void> {
    const bucket = Math.floor(Date.now() / resolutionMs);
    const key = `rate.limit.${baseKey}.${bucket}`;
    const count = await this.get(key);
    if (count > limit) { throw new RateLimitError(`rate limit exceeded: ${limit} per ${resolutionMs}ms`); }
    return await this.incr(key, resolutionMs);
  }

  async incr(key: string, expireMs = 0): Promise<any> {
    return this.pool.withClient(async client => client.multi().incr(key).expire(key, expireMs / 1000).exec());
  }

  get hostname(): string {
    if (!Redis._hostname) {
      const hostname = os.hostname() || "unknown";
      Redis._hostname = hostname.split(".")[0];
    }
    return Redis._hostname;
  }

  static async shutdown(): Promise<void> {
    if (Redis._subscriber) {
      logger.trace("Disconnecting subscriber client");
      await Redis._subscriber.disconnect();
    }
    await Redis._pool.shutdown();
  }

}
