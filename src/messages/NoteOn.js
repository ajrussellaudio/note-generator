import { int, random } from "../util";

export class NoteOn {
  constructor(number, velocity) {
    this.number = number;
    this.velocity = velocity || int(random(128));
  }
}
