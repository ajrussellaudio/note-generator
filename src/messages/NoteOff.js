import { NOTE_OFF } from "./types";

export class NoteOff {
  constructor(number) {
    this.type = NOTE_OFF;
    this.number = number;
    this.velocity = 0;
  }
}
