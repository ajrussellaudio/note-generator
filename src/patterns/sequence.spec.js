import { TestScheduler } from "rxjs/testing";
import { sequence } from "./sequence";

describe("sequence", () => {
  const scheduler = new TestScheduler((actual, expected) =>
    expect(actual).toEqual(expected)
  );

  it("turns an array into a looping sequence", () => {
    const input = [5, 6, 7, 8];
    const seq$ = sequence(input);
    scheduler.run(helpers => {
      const { cold, expectObservable } = helpers;
      const click$ = cold("-a-a-a-a-a-a");
      const output$ = click$.pipe(seq$);
      expectObservable(output$).toBe("-u-v-w-x-y-z", {
        u: input[0],
        v: input[1],
        w: input[2],
        x: input[3],
        y: input[0],
        z: input[1]
      });
    });
  });
});
