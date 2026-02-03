import { resolve, type promises } from "node:dns";
import readline from "node:readline";
import fs from  'fs'


const outputFilePath: string = 'user_data.json';

// TypeScript infers that this is readline.Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to ask question 

interface UserData {
  name:string
  age:number 
  
}




function ask (question:string):Promise<string>{
  return new Promise((resolve)=>rl.question(question,resolve))
}
async function main (){
    const userData:UserData={
      name: await ask("what is your name"),
      age:parseInt(await ask ("what is your age "))
    }
    console.log(userData)
    rl.close()
    fs.appendFile(outputFilePath, JSON.stringify(userData, null, 4) + "\n", "utf8", () => {
      console.log("user data appended");
    });

}

main()