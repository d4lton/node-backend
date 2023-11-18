/**
 * Copyright ©2023 Dana Basken
 */

import {CronJob} from "../src";

describe("CronJob", function() {

  it("parse() should return correct values", () => {
    expect(CronJob.parse("* * * * *")).toEqual({
      "minute": {"values": [], "wildcard": true},
      "hour": {"values": [], "wildcard": true},
      "date": {"values": [], "wildcard": true},
      "month": {"values": [], "wildcard": true},
      "day": {"values": [], "wildcard": true}
    });
    expect(CronJob.parse("*/10 12 * * *")).toEqual({
      "minute": {"values": ["0", "10", "20", "30", "40", "50"], "wildcard": false},
      "hour": {"values": ["12"], "wildcard": false},
      "date": {"values": [], "wildcard": true},
      "month": {"values": [], "wildcard": true},
      "day": {"values": [], "wildcard": true}
    });
  });

  it("stringify() should return correct values", () => {
    expect(CronJob.stringify({
      "minute": {"values": ["0", "10", "20", "30", "40", "50", "52"], "wildcard": false},
      "hour": {"values": ["12"], "wildcard": false},
      "date": {"values": [], "wildcard": true},
      "month": {"values": [], "wildcard": true},
      "day": {"values": [], "wildcard": true}
    })).toEqual("*/10,52 12 * * *");
    expect(CronJob.stringify({
      "minute": {"values": [], "wildcard": false},
      "hour": {"values": ["0", "3", "6", "9", "12", "15", "18", "21"], "wildcard": false},
      "date": {"values": [], "wildcard": true},
      "month": {"values": [], "wildcard": true},
      "day": {"values": ["1"], "wildcard": true}
    })).toEqual("* */3 * * 1");
    expect(CronJob.stringify({
      "minute": {"values": [], "wildcard": false},
      "hour": {"values": [], "wildcard": false},
      "date": {"values": ["1", "8", "9", "10", "15", "22", "29"], "wildcard": true},
      "month": {"values": [], "wildcard": true},
      "day": {"values": ["0", "3", "4", "6"], "wildcard": true}
    })).toEqual("* * */7,9-10 * */3,4");
  });

});
