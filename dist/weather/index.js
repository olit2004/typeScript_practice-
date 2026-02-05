import { Command } from "commander";
import { currentWeather } from "./commands/currentWeather.js";
import { forecastWeather } from "./commands/forecastWeather.js";
const program = new Command();
program
    .name("wheather")
    .description("ClI for know weather")
    .version("0.1");
currentWeather(program);
forecastWeather(program);
program.parse(process.argv);
//# sourceMappingURL=index.js.map