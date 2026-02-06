import { ask } from "../tasker/lib/input.js";
import fs from "fs";
import { renderGame } from "./gameRender.js";

type Word = { word: string; category: string };

export async function play(category: string = "") {
  let words: Word[] = JSON.parse(
    fs.readFileSync("./src/hangman/words.json", "utf-8")
  );

  if (category) {
    words = words.filter((w) => w.category === category);
    if (words.length === 0) {
      console.log(`No words found for category "${category}".`);
      return;
    }
  }

  const original = words[Math.floor(Math.random() * words.length)]!.word;

  let livesLeft = 6;
  const guessed: string[] = [];
  const correct: string[] = [];

  const renderWord = () =>
    original
      .split("")
      .map((ch) => (correct.includes(ch) ? ch : "_"))
      .join(" ");

while (livesLeft > 0) {
  renderGame(renderWord(), guessed, livesLeft, category);

  let guess = (await ask("Enter your guess (one character, or type 'quit'):")).trim();

  if (guess.toLowerCase() === "quit") {
    console.log(" Thanks for playing Hangman! Goodbye.");
    return; 
  }

  if (guess.length !== 1) {
    console.log("Please enter exactly one character.");
    continue;
  }

  if (guessed.includes(guess)) {
    console.log("Already guessed, try again.");
    continue;
  }

  guessed.push(guess);

  if (original.includes(guess)) {
    correct.push(guess);
    if (correct.length === new Set(original).size) {
      console.log("---- Congratulations! You won Hangman! ---");
      return;
    }
  } else {
    livesLeft--;
  }
}

  renderGame(renderWord(), guessed, livesLeft, category);
  console.log("💀 Game Over! The word was: " + original);
}