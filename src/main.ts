// main.ts

// Import dependencies
import { Note, NotePitch, OctaveIndex } from "./model.ts";
import "./style.css";

// 3. Spec: The application should leverage TypeScript Record structure to map between the piano keys, associated notes and corresponding sound file.
// Record Mapping of NotePitch to Sound File
const noteSoundMap: Record<NotePitch, string> = {
  C: "piano_C.mp3",
  "C-sharp": "piano_CSharp.mp3",
  D: "piano_D.mp3",
  "D-sharp": "piano_DSharp.mp3",
  E: "piano_E.mp3",
  F: "piano_F.mp3",
  "F-sharp": "piano_FSharp.mp3",
  G: "piano_G.mp3",
  "G-sharp": "piano_GSharp.mp3",
  A: "piano_A.mp3",
  "A-sharp": "piano_ASharp.mp3",
  B: "piano_B.mp3",
};

// 2. Spec: The application should use TypeScript types and interfaces, as defined in the model.ts file, to ensure type safety and code clarity. Specifically, the Note (or its equivalent) interface should be used in relevant areas to ensure that any variable or function dealing with notes follows this structure.
// 5. Spec: The application should implement and correctly utilize a playSound function to play the appropriate sound when a key is clicked.
const playSound = (note: Note) => {
  const file = `./sounds/${noteSoundMap[note.pitch]}`;
  // 6. Spec: The playSound function should gracefully handle potential issues such as missing sound files or failed audio playback. It should display error messages to the user through alerts and log detailed error messages to the console.
  // According to Courselore Post #199 - You could have handled this all together (implemented below) + separate check to see if the file exist and manually throw exception (fetch HEAD - check if file exists on local server)
  fetch(file, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Sound file not found: ${file}`);
      }
      // Play sudio file
      const audio = new Audio(file);
      return audio.play();
    })
    .catch((error) => {
      // Additionally, a detailed error message should be logged to the console (from website).
      console.error("Error playing sound - ", error);
      alert(
        "Sorry, an error occurred while trying to play the sound. Please try again later.",
      );
    });
};

// 4. Spec: Event listeners should be attached to keys after ensuring the DOM is fully loaded (using the DOMContentLoaded event listener).
document.addEventListener("DOMContentLoaded", () => {
  // Get keys for event listeners
  const keys = document.querySelectorAll(".natural-key, .accidental-key");

  keys.forEach((key) => {
    key.addEventListener("click", (e) => {
      // Get event properties
      const notePitch = (e.currentTarget as HTMLElement).id as NotePitch;
      const noteType = key.classList.contains("natural-key")
        ? "natural"
        : "sharp";

      // 2. Spec: The application should use TypeScript types and interfaces, as defined in the model.ts file, to ensure type safety and code clarity. Specifically, the Note (or its equivalent) interface should be used in relevant areas to ensure that any variable or function dealing with notes follows this structure.
      // Construct note object for the clicked key
      const note: Note = {
        type: noteType,
        pitch: notePitch,
        octave: 4 as OctaveIndex,
      };

      // Play the sound
      playSound(note);
    });
  });
});

// General Specs
// 1. Spec: The Piano App should visually represent keys for both natural and accidental notes within a single octave. When a piano key is clicked, it should play the corresponding sound for that note.
// 2. Spec: The application should use TypeScript types and interfaces, as defined in the model.ts file, to ensure type safety and code clarity. Specifically, the Note (or its equivalent) interface should be used in relevant areas to ensure that any variable or function dealing with notes follows this structure.
// 7. Spec: All variables, including function parameters, should have TypeScript types. All functions should specify return types.
// 10. Spec: The application should be modular, with a clear distinction between the model (as defined in model.ts) and the controller (as defined in main.ts).
// 11. Spec: The deployed app should run smoothly without any errors. It should not display debugging messages in the console. (You may use debugging messages during development but remove them for deployment)
// 12. Spec: Ensure adherence to best practices in code readability, such as consistent indentation, clear naming, and relevant code comments. Properly organize and structure the code by using separate, well-named functions for different functionalities, with each function having a single responsibility.
// 9. Spec: There should be no formatting or TypeScript (compile-time) errors. Students must run the formatter (prettier) and type-check commands provided in package.json to ensure this before submission.
// > piano-app@0.0.0 type-check /Users/benjamin/Desktop/Full-Stack Javascript/Full-Stack-Javascript/homework-4-piano-app-benchang323
// > tsc --noEmit
// > piano-app@0.0.0 prettier /Users/benjamin/Desktop/Full-Stack Javascript/Full-Stack-Javascript/homework-4-piano-app-benchang323
// > prettier --write "src/**/*.{js,ts}" --config ".prettierrc.json"
// src/main.ts 118ms
// src/model.ts 4ms
// src/vite-env.d.ts 1ms
