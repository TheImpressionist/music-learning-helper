export type ValidNotes = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface INote {
  note: ValidNotes;
  hasSharp: boolean;
  hasFlat: boolean;
}
