/**
 * Copyright ©2023 Dana Basken
 */

import {English} from "@d4lton/node-common";
import log4js from "log4js";

const logger = log4js.getLogger("EventSource");

export type ServerSentEvent = {
  id?: string | number,
  event: string,
  data: any
};

export class EventSource extends EventTarget {

  private _streaming: boolean = false;
  private _controller?: AbortController;

  constructor(public request: any, public response: any, timeout: string = "5m") {
    super();
    this.request.setTimeout(English.ms(timeout));
    this.request.on("close", () => this.stop());
    this.response.set({"Cache-Control": "no-cache", "Content-Type": "text/event-stream", "Connection": "keep-alive"});
    this.response.flushHeaders();
    this._controller = new AbortController();
    this._controller.signal.addEventListener("abort", () => this.stop());
  }

  stop(): void {
    try {
      if (this.connected) {
        this._streaming = false;
        this._controller?.abort();
        this._controller = undefined;
        this.response.end();
        this.dispatchEvent(new Event("end"));
      }
    } catch (error: any) {
      logger.error(error.message);
    }
  }

  get connected(): boolean {
    return !!this._controller;
  }

  get controller(): AbortController | undefined {
    return this._controller;
  }

  sendEvent(event: ServerSentEvent): void {
    if (!this.connected) { return; }
    this.response.write(`id: ${event.id}\nevent: ${event.event}\ndata: ${event.data}\n\n`);
  }

  ping(): void {
    this.sendEvent(EventSource.makePingEvent());
  }

  static makeEvent(topic: string, data: any, id?: string | number): ServerSentEvent {
    data = typeof data === "string" ? data : JSON.stringify(data);
    return {
      id: id || Date.now(),
      event: topic,
      data: data
    };
  }

  static makePingEvent(): ServerSentEvent {
    return EventSource.makeEvent("ping", {}, Date.now());
  }

}
