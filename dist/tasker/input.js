import { createInterface } from "node:readline";
//creeating  the interface to talk to the user via the terminal 
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
// function to ask qustions 
function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}
//# sourceMappingURL=input.js.map