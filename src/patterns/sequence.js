import { pipe } from "rxjs";
import { map, mapTo, scan } from "rxjs/operators";

export const sequence = notes =>
  pipe(
    mapTo(1),
    scan((acc, curr) => acc + curr),
    map(count => (count - 1) % notes.length),
    map(i => notes[i])
  );
