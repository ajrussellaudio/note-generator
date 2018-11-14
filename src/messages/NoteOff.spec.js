import { NoteOff } from "./NoteOff";

describe("NoteOff", () => {
  let note;

  beforeEach(() => {
    note = new NoteOff(60);
  });

  it("has a number", () => {
    expect(note.number).toBe(60);
  });

  it("has a velocity of zero", () => {
    expect(note.velocity).toBe(0);
  });
});
