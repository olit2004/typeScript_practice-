import type {Task} from "../task.js"
import fs from "fs"

export function  listAll(outputFilePath:string ):Task[]{
                let existing: { tasks: Task[] } = { tasks: [] };
                if (fs.existsSync(outputFilePath)) {
                    const content = fs.readFileSync(outputFilePath, "utf8");
                    if (content.trim()) {
                    existing = JSON.parse(content);
                    }
                }
                 return existing.tasks
}

export function markAsDone (outputFilePath:string ,id:number ){
                    let existing: { tasks: Task[] } = { tasks: [] };
                if (fs.existsSync(outputFilePath)) {
                    const content = fs.readFileSync(outputFilePath, "utf8");
                    if (content.trim()) {
                    existing = JSON.parse(content);
                    }
                }
               const task= existing.tasks.find(t => t.id === id)
               if (task){
                task.status="done"
                fs.writeFileSync(outputFilePath, JSON.stringify(existing, null, 4), "utf8");
                console.log(`Task with id ${id} marked as done!`);

               }else{
                console.log( "there is no task with such id ")
               }


}