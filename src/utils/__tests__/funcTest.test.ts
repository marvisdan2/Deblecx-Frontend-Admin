import { funcTest } from "../funcTest";

describe("funcTest", () => {
  it("should return an string test ", () => {
    const result = funcTest();

    expect(result).toEqual("Test");
  });
});
