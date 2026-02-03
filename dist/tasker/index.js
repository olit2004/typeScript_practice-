import { close, ask } from "./lib/input.js";
import { addTask, clearTasks } from "./services/addTask.js";
import { listAll, markAsDone } from "./services/readTasks.js";
const outputFilePath = "./db.json";
async function main() {
    // Collect user input
    let sentinel = true;
    while (sentinel) {
        const option = await ask("welcome to tasker what do you want to do today \n\t 1 - Add task \n\t 2- All tasks   \n\t 3 - marked as done \n\t 4- clear tasks \n\t Q - to quit \n\  ");
        console.log("your option is ", option);
        if (option.toLowerCase() === "q") {
            sentinel = false;
            continue;
        }
        switch (option.trim()) {
            case "1":
                const task = {
                    title: await ask("Enter the title "),
                    discription: await ask("Enter the discription "),
                    status: (await ask("Enter its status (done / pending  )")).trim() || "pending"
                };
                addTask(task, outputFilePath);
                break;
            case "2":
                const tasks = listAll(outputFilePath);
                tasks.forEach(elem => {
                    console.log(elem);
                    console.log("------------------------------------------------");
                });
                break;
            case "3":
                const id = parseInt(await ask("Enter the id of the task you wanat to mark as complete "));
                markAsDone(outputFilePath, id);
                break;
            case "4":
                clearTasks(outputFilePath);
                console.log("@@@@@@@@@@@@@@@@@@@@ --All the tasks have been cleared -- @@@@@@@@@@@@");
                break;
            default:
                console.log("invalid key entered please only enter the  keys listed above ");
                break;
        }
    }
    close();
}
main();
// const userData: UserData = {
//   name: await ask("What is your name? "),
//   age: parseInt(await ask("What is your age? "), 10),
// };
// // Read existing data
// let existing: { users: UserData[] } = { users: [] };
// if (fs.existsSync(outputFilePath)) {
//   const content = fs.readFileSync(outputFilePath, "utf8");
//   if (content.trim()) {
//     existing = JSON.parse(content);
//   }
// }
// // Add new user
// existing.users.push(userData);
// // Write back to file
// fs.writeFileSync(outputFilePath, JSON.stringify(existing, null, 4), "utf8");
// console.log("User data logged!");
// // Display all users in a table
// console.log("**************************************************");
// console.table(existing.users);
//# sourceMappingURL=index.js.map