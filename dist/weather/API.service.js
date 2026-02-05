import dotenv from "dotenv";
import { WeatherResponseSchema, ForecastResponseSchema, } from "./weatherType .js";
dotenv.config();
const APIKey = process.env.APIKEY;
async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const rawData = await response.json();
    // Handle OpenWeather error payloads (cod as string)
    if (typeof rawData.cod === "string" && rawData.cod !== "200") {
        throw new Error(`API error: ${rawData.message}`);
    }
    return rawData;
}
export async function getCityWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKey}&units=metric`;
    const rawData = await fetchJson(url);
    return WeatherResponseSchema.parse(rawData);
}
export async function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${APIKey}&units=metric`;
    const rawData = await fetchJson(url);
    return ForecastResponseSchema.parse(rawData);
}
//# sourceMappingURL=API.service.js.map