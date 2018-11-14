import { NoteOn } from "./NoteOn";
import { NOTE_ON } from "./types";

describe("NoteOn", () => {
  let note;

  beforeEach(() => {
    note = new NoteOn(60, 100);
  });

  it("is of type NOTE_ON", () => {
    expect(note.type).toBe(NOTE_ON);
  });

  it("has a note number", () => {
    expect(note.number).toBe(60);
  });

  it("has a velocity", () => {
    expect(note.velocity).toBe(100);
  });
});
