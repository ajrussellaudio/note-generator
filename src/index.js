import { pipe, timer, zip } from "rxjs";
import { map, tap, delay } from "rxjs/operators";
import { NoteOn, NoteOff } from "./messages";
import { int, random, choose } from "./util";

const makeButton = () => {
  const button = document.createElement("button");
  button.textContent = "Click!";
  document.body.appendChild(button);
  return button;
};

const sendMsg = msg => console.log("Sending:", msg);

const playNote = (dur, tempo) =>
  pipe(
    // TODO: abstract this out
    // TODO: how the fuck does tempo/dur work?
    map(([note, velocity]) => new NoteOn(note, velocity)),
    tap(note => sendMsg(note)),
    delay(1000),
    map(note => new NoteOff(note.number)),
    tap(noteOff => sendMsg(noteOff))
  );

const tempo = bpm => (60 / bpm) * 1000;

const app = () => {
  // const click$ = fromEvent(makeButton(), "click");
  const scale = [60, 63, 65, 68, 70, 72];

  const click$ = timer(0, tempo(128));
  const noteNumber$ = click$.pipe(map(() => choose(scale)));
  const velocity$ = click$.pipe(map(() => int(random(128))));
  zip(noteNumber$, velocity$)
    .pipe(playNote(4, tempo(128)))
    .subscribe();
};

window.addEventListener("load", app);
