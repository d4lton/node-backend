/**
 * Copyright ©2022 Dana Basken
 */

import {Config} from "../src";

describe("Config", function() {

  const entries: any = {
    name: "lerxst",
    location: {
      country: "wakanda",
      coordinates: {
        longitude: 1.2,
        latitude: 2.1
      }
    },
    json_data: "@JSON:tests/json_data.json",
    text_data: "@TEXT:tests/text_data.txt"
  };

  beforeEach(() => {
    Config.reset();
  });

  it("get() should return correct values", () => {
    Config.load(entries);
    expect(Config.get("name")).toEqual("lerxst");
    expect(Config.get("location.coordinates.longitude")).toEqual(1.2);
  });

  it("set() should set correct values", () => {
    Config.load(entries);
    Config.set("age", 21);
    expect(Config.get("age")).toEqual(21);
    Config.set("location.country", "elbonia");
    expect(Config.get("location.country")).toEqual("elbonia");
  });

  it("get() with imports should work as expected", () => {
    Config.load(entries);
    expect(Config.get("json_data")).toEqual({"key": "value"});
    expect(Config.get("text_data")).toEqual("this is a test text file");
  });

});
