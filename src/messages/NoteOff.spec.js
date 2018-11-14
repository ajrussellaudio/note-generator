import { NoteOff } from "./NoteOff";
import { NOTE_OFF } from "./types";

describe("NoteOff", () => {
  let note;

  beforeEach(() => {
    note = new NoteOff(60);
  });

  it("is of type NOTE_OFF", () => {
    expect(note.type).toBe(NOTE_OFF);
  });

  it("has a number", () => {
    expect(note.number).toBe(60);
  });

  it("has a velocity of zero", () => {
    expect(note.velocity).toBe(0);
  });
});
