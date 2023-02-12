/**
 * Copyright ©2022 Dana Basken
 */

import {Package} from "../src";

describe("Package", function() {

  it("name should return a value", () => {
    const pkg = new Package();
    expect(pkg.name).not.toBeUndefined();
  });

});
