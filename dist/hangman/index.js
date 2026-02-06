import fs from "fs";
import { ask } from "../tasker/lib/input.js";
const words = JSON.parse(fs.readFileSync("./src/hangman/words.json", "utf-8"));
const randomIndex = Math.floor(Math.random() * words.length);
const original = words[randomIndex].word;
console.log(original);
// const charsToReplace = ["a", "n"];
// const regex = new RegExp(`[${charsToReplace.join("")}]`, "g");
// const result = original.replace(regex, " _ ");
// console.log(result); 
//# sourceMappingURL=index.js.map