import dotenv from "dotenv";
import { WeatherResponseSchema, ForecastResponseSchema, } from "./weatherForcast .js";
dotenv.config();
const APIKey = process.env.APIKEY;
async function getCityWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    const response = await fetch(url);
    const rawData = await response.json();
    const provedData = WeatherResponseSchema.parse(rawData);
    console.log(`City: ${provedData.name}, Temp: ${provedData.main.temp}°C`);
}
async function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=metric`;
    const response = await fetch(url);
    const rawData = await response.json();
    const forecast = ForecastResponseSchema.parse(rawData);
    forecast.list.slice(0, 3).forEach(f => {
        console.log(`${f.dt_txt} → ${f?.weather[0]?.description}, ${f.main.temp}°C`);
    });
}
getCityWeather("london");
getForecast("london");
//# sourceMappingURL=index.js.map