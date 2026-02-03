import readline from "node:readline";
import fs from "fs";
const outputFilePath = "user_data.json";
// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Helper function to ask questions
function ask(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}
async function main() {
    // Collect user input
    const userData = {
        name: await ask("What is your name? "),
        age: parseInt(await ask("What is your age? "), 10),
    };
    // Read existing data
    let existing = { users: [] };
    if (fs.existsSync(outputFilePath)) {
        const content = fs.readFileSync(outputFilePath, "utf8");
        if (content.trim()) {
            existing = JSON.parse(content);
        }
    }
    // Add new user
    existing.users.push(userData);
    // Write back to file
    fs.writeFileSync(outputFilePath, JSON.stringify(existing, null, 4), "utf8");
    console.log("User data logged!");
    // Display all users in a table
    console.log("**************************************************");
    console.table(existing.users);
    rl.close();
}
main();
//# sourceMappingURL=index.js.map