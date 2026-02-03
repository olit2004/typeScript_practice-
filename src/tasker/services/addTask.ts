import fs from "fs";
import type {Task} from "../task.js"


export function  addTask(task: Omit<Task ,"id">,outputFilePath:string){

            // Read existing data
            let existing: { tasks: Task[] } = { tasks: [] };

            if (fs.existsSync(outputFilePath)) {
                const content = fs.readFileSync(outputFilePath, "utf8");
                if (content.trim()) {
                existing = JSON.parse(content);
                }
            }
              const newId =
                existing.tasks.length > 0
                ? Math.max(...existing.tasks.map(t => t.id)) + 1
                : 1;

            const newTask: Task = { ...task, id: newId };

            // Add new user
            existing.tasks.push(newTask);

            // Write back to file
            fs.writeFileSync(outputFilePath, JSON.stringify(existing, null, 4), "utf8");
            console.log("User data logged!");

    
} 


export function clearTasks( outputFilePath:string ){
     fs.writeFileSync(outputFilePath, JSON.stringify({}, null, 4), "utf8");

}