import { Command } from "commander";
import { getCityWeather } from "../API.service.js";
export function currentWeather(program) {
    program
        .command("current <city>")
        .description("gives the current weather of the provided city ")
        .action(async (city) => {
        try {
            const weather = await getCityWeather(city);
            console.log(` Weather for ${weather.name}`);
            console.log(`Coordinates: [${weather.coord.lat}, ${weather.coord.lon}]`);
            console.log(`Condition: ${weather?.weather[0]?.main} - ${weather?.weather[0]?.description}`);
            console.log(`Temperature: ${weather.main.temp}°C (feels like ${weather.main.feels_like}°C)`);
            console.log(`Min/Max: ${weather.main.temp_min}°C / ${weather.main.temp_max}°C`);
            console.log(`Humidity: ${weather.main.humidity}%`);
            console.log(`Wind: ${weather.wind.speed} m/s, direction ${weather.wind.deg}°`);
            console.log(`Cloudiness: ${weather.clouds.all}%`);
        }
        catch (err) {
            console.error("Failed to fetch weather data");
        }
    });
}
//# sourceMappingURL=currentWeather.js.map