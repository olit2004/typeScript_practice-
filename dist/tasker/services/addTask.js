import fs from "fs";
export function addTask(task, outputFilePath) {
    // Read existing data
    let existing = { tasks: [] };
    if (fs.existsSync(outputFilePath)) {
        const content = fs.readFileSync(outputFilePath, "utf8");
        if (content.trim()) {
            existing = JSON.parse(content);
        }
    }
    const newId = existing.tasks.length > 0
        ? Math.max(...existing.tasks.map(t => t.id)) + 1
        : 1;
    const newTask = { ...task, id: newId };
    // Add new user
    existing.tasks.push(newTask);
    // Write back to file
    fs.writeFileSync(outputFilePath, JSON.stringify(existing, null, 4), "utf8");
    console.log("User data logged!");
}
export function clearTasks(outputFilePath) {
    fs.writeFileSync(outputFilePath, JSON.stringify({}, null, 4), "utf8");
}
//# sourceMappingURL=addTask.js.map