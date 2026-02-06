import { ask } from "../tasker/lib/input.js";
import fs from "fs"
type word ={ word: string; category: string }
import { renderGame } from "./gameRender.js";


export async function play (category:string =""){
    let words:word[] = JSON.parse(
      fs.readFileSync("./src/hangman/words.json", "utf-8")
    );

    if (category){
        words = words.filter(word=>word.category===category)
    }
    const randomIndex:number = Math.floor(Math.random()*words.length)
    const original:string =words[randomIndex]!.word ;
    
    let sentinel = true;
    let livesLeft=6
    let Guessed:string[]=[]
    let correct:string[]=[]
    while (livesLeft>0){
        const notFound = [...new Set(original)]
               .filter(char => !correct.includes(char));
        const regex = new RegExp(`[${notFound.join("")}]`, "g");
        const result = original.replace(regex, " _ ");

        renderGame (result,Guessed,livesLeft,category)
        let guess:string = await ask(`Enter your guess (only one character)`)

        if ( Guessed.includes(guess)){
            console.log("already guessed  try again")
            continue
        }
        Guessed.push(guess)
        if (original.includes(guess)){
            correct.push(guess)
            if (correct.length===[...new Set(original)].length){
               console.log("🎉 Congratulations! You won Hangman! 🎉");
               break
            }

        }else{

            livesLeft-=1
        }

    }
    if (livesLeft=0){
    const notFound = [...new Set(original)]
            .filter(char => !correct.includes(char));
    const regex = new RegExp(`[${notFound.join("")}]`, "g");
    const result = original.replace(regex, " _ ");

        renderGame (result,Guessed,livesLeft)
    console.log("💀 Game Over! The word was: " + original);

    
    
     }
   
   


}