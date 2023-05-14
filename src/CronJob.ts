/**
 * Copyright ©2021 Dana Basken
 */

import log4js from "log4js";
import {Redis} from "./redis/Redis";
import {English} from "@d4lton/node-common";

interface CronTime {
  wildcard: boolean;
  values: string[];
}

export interface CronExpression {
  minute: CronTime;
  hour: CronTime;
  date: CronTime;
  month: CronTime;
  day: CronTime;
}

export interface CronJobOptions {
  serial?: boolean;
  start?: boolean;
  immediate?: boolean;
}

const logger = log4js.getLogger("CronJob");

/**
 * perform a periodic task with 1 minute resolution
 * can be parallel or serial using redis locking
 */
export abstract class CronJob {

  private static SLEEP_MS = English.ms("1s");
  private static MINUTE_MS = English.ms("60s");
  private static LOCK_TTL_MS = English.ms("45s");

  private _interval?: any;
  private _lastMinute: number = 0;
  private _redis?: Redis;

  protected constructor(
    public expression: CronExpression,
    public options: CronJobOptions = {}
  ) {
    this.options = Object.assign({}, {serial: true, start: false, immediate: false}, this.options);
    if (this.options.start) {
      this.start();
      if (this.options.immediate) {
        setTimeout(async () => { await this.tryRun(new Date()); }, 0);
      }
    }
  }

  start(): void {
    this.stop();
    this._interval = setInterval(async () => {
      const now = new Date();
      const minute = Math.floor(now.getTime() / CronJob.MINUTE_MS);
      if (!this._lastMinute) { this._lastMinute = minute; }
      if (minute > this._lastMinute && this.canRun(now)) {
        this._lastMinute = minute;
        await this.tryRun(now);
      }
    }, CronJob.SLEEP_MS);
  }

  async tryRun(now: Date): Promise<void> {
    try {
      if (this.options.serial) {
        const lock = await this.redis.getLock(`cronjob.${this.constructor.name}`, false, CronJob.LOCK_TTL_MS);
        if (lock) { this.run(now); }
        // lock will expire naturally, don't unlock. this will prevent other processes from immediately grabbing lock for this "minute"
      } else {
        this.run(now);
      }
    } catch (error: any) {
      logger.error(error.message);
    }
  }

  abstract run(now: Date): void;

  canRun(now: Date): boolean {
    if (!this.expression.minute.wildcard && !this.expression.minute.values.includes(`${now.getMinutes()}`)) { return false; }
    if (!this.expression.hour.wildcard && !this.expression.hour.values.includes(`${now.getHours()}`)) { return false; }
    if (!this.expression.date.wildcard && !this.expression.date.values.includes(`${now.getDate()}`)) { return false; }
    if (!this.expression.month.wildcard && !this.expression.month.values.includes(`${now.getMonth()}`)) { return false; }
    if (!this.expression.day.wildcard && !this.expression.day.values.includes(`${now.getDay()}`)) { return false; }
    return true;
  }

  stop(): void {
    clearInterval(this._interval);
  }

  static get always(): CronExpression {
    return {
      minute: {wildcard: true, values: []},
      hour: {wildcard: true, values: []},
      date: {wildcard: true, values: []},
      month: {wildcard: true, values: []},
      day: {wildcard: true, values: []}
    };
  }

  static fromCronString(cron: string): CronExpression {
    const matches = cron.match(/^([*0-9/\-,]+)\s+([*0-9/\-,]+)\s+([*0-9/\-,]+)\s+([*0-9/\-,]+)\s+([*0-9/\-,]+)$/);
    if (!matches) { throw new Error(`invalid cron: '${cron}'`); }
    return {
      minute: CronJob.parseCronTimeValue(matches[1], 0, 60),
      hour: CronJob.parseCronTimeValue(matches[2], 0, 23),
      date: CronJob.parseCronTimeValue(matches[3], 1, 31),
      month: CronJob.parseCronTimeValue(matches[4], 0, 11),
      day: CronJob.parseCronTimeValue(matches[5], 0, 6)
    };
  }

  static parseCronTimeValue(pattern: string, minValue: number, maxValue: number): any {
    if (pattern === "*") { return {wildcard: true, values: []}; }
    const map = pattern
      .split(",")
      .map(it => {
        const matches = it.match(/\*\/(\d+)/);
        if (!matches) { return it; }
        const interval = parseInt(matches[1]);
        if (interval < 1 || interval > maxValue) { throw new Error(`unexpected value: ${it}`); }
        return [...Array(Math.round(maxValue / interval)).keys()].map(it => `${it * interval}`);
      })
      .flat()
      .map((it: string) => {
        const matches = it.match(/(\d+)-(\d+)/);
        if (!matches) { return it; }
        const start = parseInt(matches[1]);
        const end = parseInt(matches[2]);
        if (start < minValue || end <= start || end > maxValue) { throw new Error(`unexpected value: ${it}`); }
        return [...Array(end - start + 1).keys()].map(it => `${it + start}`);
      })
      .flat()
      .reduce((values, value) => {
        return {...values, [value]: true};
      }, {});
    const values = Object.keys(map);
    return {wildcard: values.length === 0, values: Object.keys(map)};
  }

  get redis(): Redis {
    if (!this._redis) {
      this._redis = new Redis();
    }
    return this._redis;
  }

}
