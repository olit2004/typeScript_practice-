import { resolve } from "node:dns";
import readline from "node:readline";
import fs from 'fs';
const outputFilePath = 'user_data.json';
// TypeScript infers that this is readline.Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}
async function main() {
    const userData = {
        name: await ask("what is your name"),
        age: parseInt(await ask("what is your age "))
    };
    console.log(userData);
    rl.close();
    fs.appendFile(outputFilePath, JSON.stringify(userData, null, 4) + "\n", "utf8", () => {
        console.log("user data appended");
    });
}
main();
//# sourceMappingURL=index.js.map