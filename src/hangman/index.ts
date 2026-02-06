import fs from "fs"
import { ask } from "../tasker/lib/input.js";

type word ={ word: string; category: string }


const words:word[] = JSON.parse(
  fs.readFileSync("./src/hangman/words.json", "utf-8")
);

const randomIndex:number = Math.floor(Math.random()*words.length)


 
const original:string =words[randomIndex]!.word ;
console.log(original)
// const charsToReplace = ["a", "n"];

// const regex = new RegExp(`[${charsToReplace.join("")}]`, "g");
// const result = original.replace(regex, " _ ");

// console.log(result); 