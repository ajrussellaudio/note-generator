import { NoteOn } from "./NoteOn";

describe("NoteOn", () => {
  let note;

  beforeEach(() => {
    note = new NoteOn(60, 100);
  });

  it("has a note number", () => {
    expect(note.number).toBe(60);
  });

  it("has a velocity", () => {
    expect(note.velocity).toBe(100);
  });
});
