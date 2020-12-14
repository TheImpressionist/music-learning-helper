import { NoteMemorizationLesson } from "../NoteMemorizationLesson";
import { notes, sharpSymbol, flatSymbol } from "../../../Utils/notes";

describe("NoteMemorizationLesson Default Config", () => {
  let natural: Array<string> = [];
  let sharps: Array<string> = [];
  let flats: Array<string> = [];

  beforeEach(() => {
    natural = notes.map(({ note }) => note);
    sharps = notes
      .filter(({ hasSharp }) => hasSharp)
      .map(({ note }) => `${sharpSymbol}${note}`);
    flats = notes
      .filter(({ hasFlat }) => hasFlat)
      .map(({ note }) => `${flatSymbol}${note}`);
  });

  it("Should return natural, sharp, and flat notes with the default config", () => {
    const lesson = new NoteMemorizationLesson();
    const expected = [...natural, ...sharps, ...flats];
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();

      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(expected.sort());
  });
});

describe("NoteMemorizationLesson Custom Config", () => {
  let natural: Array<string> = [];
  let sharps: Array<string> = [];
  let flats: Array<string> = [];

  beforeEach(() => {
    natural = notes.map(({ note }) => note);
    sharps = notes
      .filter(({ hasSharp }) => hasSharp)
      .map(({ note }) => `${sharpSymbol}${note}`);
    flats = notes
      .filter(({ hasFlat }) => hasFlat)
      .map(({ note }) => `${flatSymbol}${note}`);
  });

  it("Should return only natural notes with", () => {
    const lesson = new NoteMemorizationLesson({
      natural: true,
      sharps: false,
      flats: false,
    });
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();
      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(natural.sort());
  });

  it("Should return only sharp notes", () => {
    const lesson = new NoteMemorizationLesson({
      natural: false,
      sharps: true,
      flats: false,
    });
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();

      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(sharps.sort());
  });

  it("Should return only flat notes", () => {
    const lesson = new NoteMemorizationLesson({
      natural: false,
      sharps: false,
      flats: true,
    });
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();

      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(flats.sort());
  });

  it("Should return natural, and sharp notes", () => {
    const lesson = new NoteMemorizationLesson({
      natural: true,
      sharps: true,
      flats: false,
    });
    const expected = [...natural, ...sharps];
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();

      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(expected.sort());
  });

  it("Should return natural, and flat notes", () => {
    const lesson = new NoteMemorizationLesson({
      natural: true,
      sharps: false,
      flats: true,
    });
    const expected = [...natural, ...flats];
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();

      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(expected.sort());
  });

  it("Should return sharp, and flat notes", () => {
    const lesson = new NoteMemorizationLesson({
      natural: false,
      sharps: true,
      flats: true,
    });
    const expected = [...sharps, ...flats];
    const result: Array<string> = [];

    while (!lesson.isLastStep()) {
      const note = lesson.getNextStep();

      if (note) {
        result.push(note);
      }
    }

    expect(result.sort()).toEqual(expected.sort());
  });
});
