import { fromEvent, pipe } from "rxjs";
import { map, tap, delay } from "rxjs/operators";
import { NoteOn, NoteOff } from "./messages";
import { int, random } from "./util";

const makeButton = () => {
  const button = document.createElement("button");
  button.textContent = "Click!";
  document.body.appendChild(button);
  return button;
};

const sendMsg = msg => console.log("Sending:", msg);

const chooseFrom = scale =>
  pipe(
    map(() => int(random(scale.length))),
    map(i => scale[i])
  );

const playNote$ = pipe(
  map(num => new NoteOn(num)),
  tap(note => sendMsg(note)),
  delay(1000),
  map(note => new NoteOff(note.number)),
  tap(noteOff => sendMsg(noteOff))
);

const app = () => {
  const button = makeButton();
  fromEvent(button, "click")
    .pipe(
      chooseFrom([60, 63, 65, 68]),
      playNote$
    )
    .subscribe();
};

window.addEventListener("load", app);
