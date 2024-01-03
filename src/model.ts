export type NoteType = "natural" | "sharp";

export type NotePitch =
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "A"
  | "B"
  | "C-sharp"
  | "D-sharp"
  | "F-sharp"
  | "G-sharp"
  | "A-sharp";

export type OctaveIndex = 4;

export interface Note {
  type: NoteType;
  pitch: NotePitch;
  octave: OctaveIndex;
}

// General Specs
// 2. Spec: The application should use TypeScript types and interfaces, as defined in the model.ts file, to ensure type safety and code clarity. Specifically, the Note (or its equivalent) interface should be used in relevant areas to ensure that any variable or function dealing with notes follows this structure.
// 7. Spec: All variables, including function parameters, should have TypeScript types. All functions should specify return types.
// 10. Spec: The application should be modular, with a clear distinction between the model (as defined in model.ts) and the controller (as defined in main.ts).
