import { Command } from "commander";
import { getForecast } from "../API.service.js";
export function forecastWeather(program) {
    program
        .command("forecast <c")
        .description("gives the current weather of the provided city ")
        .action(async (city) => {
        try {
            const forecast = await getForecast(city);
            console.log(`\n🌍 Forecast for ${forecast.city?.name}, ${forecast.city?.country}`);
            console.log(`---------------------------------------`);
            forecast.list.slice(0, 5).forEach((item) => {
                const time = item.dt_txt;
                const temp = item.main.temp.toFixed(1);
                const desc = item?.weather[0]?.description;
                const rainChance = (item.pop * 100).toFixed(0);
                console.log(` ${time} |  ${temp}°C | ${desc} | ☔${rainChance}% rain`);
            });
        }
        catch (err) {
            console.error("Failed to fetch weather:", err);
        }
    });
}
//# sourceMappingURL=forecastWeather.js.map