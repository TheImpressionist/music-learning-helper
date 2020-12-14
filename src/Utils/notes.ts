import { INote } from "../types/INote";

export const sharpSymbol = Symbol("♯");
export const flatSymbol = Symbol("♭");
export const notes: Array<INote> = [
  {
    note: "A",
    hasSharp: true,
    hasFlat: true,
  },
  {
    note: "B",
    hasSharp: false,
    hasFlat: true,
  },
  {
    note: "C",
    hasSharp: true,
    hasFlat: false,
  },
  {
    note: "D",
    hasSharp: true,
    hasFlat: true,
  },
  {
    note: "E",
    hasSharp: false,
    hasFlat: true,
  },
  {
    note: "F",
    hasSharp: true,
    hasFlat: false,
  },
  {
    note: "G",
    hasSharp: true,
    hasFlat: true,
  },
];
