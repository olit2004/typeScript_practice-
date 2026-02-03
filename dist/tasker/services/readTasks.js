import fs from "fs";
export function listAll(outputFilePath) {
    let existing = { tasks: [] };
    if (fs.existsSync(outputFilePath)) {
        const content = fs.readFileSync(outputFilePath, "utf8");
        if (content.trim()) {
            existing = JSON.parse(content);
        }
    }
    return existing.tasks;
}
export function markAsDone(outputFilePath, id) {
    let existing = { tasks: [] };
    if (fs.existsSync(outputFilePath)) {
        const content = fs.readFileSync(outputFilePath, "utf8");
        if (content.trim()) {
            existing = JSON.parse(content);
        }
    }
    const task = existing.tasks.find(t => t.id === id);
    if (task) {
        task.status = "done";
        fs.writeFileSync(outputFilePath, JSON.stringify(existing, null, 4), "utf8");
        console.log(`Task with id ${id} marked as done!`);
    }
    else {
        console.log("there is no task with such id ");
    }
}
//# sourceMappingURL=readTasks.js.map