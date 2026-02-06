import { ask } from "../tasker/lib/input.js";
import { play } from "./gameEngine.js";
import fs from "fs";
async function main() {
    const welcome_message = `
====================================
    Welcome to Hangman CLI 
====================================
Guess the hidden word, one letter at a time.
But beware... too many mistakes and the man hangs!

Type a letter to begin, or 'quit' to exit.
Good luck, challenger!
====================================
`;
    console.log(welcome_message);
    const words = JSON.parse(fs.readFileSync("./src/hangman/words.json", "utf-8"));
    const categories = [...new Set(words.map((w) => w.category))];
    console.log("Available categories:");
    categories.forEach((c, i) => console.log(`${i + 1}. ${c}`));
    let categoryChoice = await ask("Choose a category by name (or press Enter for random): ");
    categoryChoice = categoryChoice.trim();
    if (categoryChoice && !categories.includes(categoryChoice)) {
        console.log(`Category "${categoryChoice}" not found. Starting with random words.`);
        categoryChoice = "";
    }
    await play(categoryChoice);
}
main();
//# sourceMappingURL=index.js.map