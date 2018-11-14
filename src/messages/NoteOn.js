import { int, random } from "../util";
import { NOTE_ON } from "./types";

export class NoteOn {
  constructor(number, velocity) {
    this.type = NOTE_ON;
    this.number = number;
    this.velocity = velocity || int(random(128));
  }
}
