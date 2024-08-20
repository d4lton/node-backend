/**
 * Copyright ©2022 Dana Basken
 */

import {English} from "@d4lton/node-common";
import {RedisClientOptions} from "@redis/client";
import log4js from "log4js";
import {createClient, RedisClientType} from "redis";
import {Config} from "../config/Config";

const logger = log4js.getLogger("RedisPool");

export type RedisPoolClient = {
  id: number;
  used: boolean;
  client: RedisClientType;
};

export class RedisPool {

  private POOL_ID = 0;

  private _clients: RedisPoolClient[] = [];

  constructor() {
  }

  async acquire(): Promise<RedisPoolClient> {
    const size = Config.get("redis.pool_size", 10);
    let poolClient = this._clients.find(it => !it.used);
    if (!poolClient) {
      if (this._clients.length >= size) { throw new Error("Pool size exceeded."); }
      const client = await RedisPool.client;
      poolClient = {id: this.POOL_ID++, used: true, client: client};
      this._clients.push(poolClient);
    }
    poolClient.used = true;
    return poolClient;
  }

  async release(poolClient: RedisPoolClient): Promise<void> {
    const client = this._clients.find(it => it.id === poolClient.id);
    if (client) { client.used = false; }
  }

  async withClient(callback: (client: RedisClientType) => Promise<any>) {
    let poolClient: RedisPoolClient | undefined = undefined;
    try {
      poolClient = await this.acquire();
      return await callback(poolClient.client);
    } catch (error: any) {
      logger.error(error.message);
    } finally {
      if (poolClient) {
        await this.release(poolClient);
      }
    }
  }

  static get client(): Promise<RedisClientType> {
    return new Promise(async (resolve) => {
      const client = createClient(RedisPool.config) as RedisClientType;
      await client.connect();
      resolve(client);
    });
  }

  static get config(): RedisClientOptions {
    const host = Config.get("redis.host", "localhost");
    const port = Config.get("redis.port", 6379);
    return {
      socket: {
        host: host,
        port: port,
        reconnectStrategy: (retries: number): number | Error => {
          logger.warn(`redis retries: ${retries}`);
          if (retries > Config.get("redis.retry.max_attempts", 10)) {
            logger.fatal("redis reconnect failed.");
            return new Error("could not reconnect");
          }
          const baseSleepMs = English.ms(Config.get("redis.retry.base_sleep_time", "1s"));
          return Math.min(Math.pow(2, retries) * baseSleepMs, English.ms(Config.get("redis.retry.max_sleep_time", "1m")));
        }
      },
      password: Config.get("redis.password"),
      database: Config.get("redis.db", 0)
    };
  }

  async shutdown(): Promise<void> {
    for (const poolClient of this._clients) {
      await poolClient.client.disconnect();
    }
  }

}
