import readline from "node:readline";
// TypeScript infers that this is readline.Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// We can explicitly type 'answer' as a string, though TS usually infers this too
rl.question("What is your name? ", async (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.question("what are you going to do today are you going to  fuck (yes/no) ", (secondanswer) => {
        if (secondanswer.toLowerCase() === "yes") {
            console.log("Good for you my man have fun i can't afford to do such things");
        }
        else {
            console.log("poor you ");
        }
        rl.close();
    });
});
//# sourceMappingURL=index.js.map