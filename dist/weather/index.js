import dotenv from "dotenv";
import { z } from "zod";
dotenv.config();
const city = "London";
const APIKey = process.env.APIKEY;
const WeatherSchema = z.object({
    coord: z.object({ lon: z.number(), lat: z.number() }),
    weather: z.array(z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string(),
    })),
    main: z.object({
        temp: z.number(),
        feels_like: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
        pressure: z.number(),
        humidity: z.number(),
    }),
    wind: z.object({ speed: z.number(), deg: z.number() }),
    clouds: z.object({ all: z.number() }),
    name: z.string(),
    cod: z.number(),
});
const getCityWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    try {
        const response = await fetch(url);
        const rawData = await response.json();
        const provedData = WeatherSchema.parse(rawData);
        console.log(`
       City: ${provedData.name}
      Condition: ${provedData?.weather[0]?.main} (${provedData?.weather[0]?.description})
       Temperature: ${provedData.main.temp}°C (feels like ${provedData.main.feels_like}°C)
       Min: ${provedData.main.temp_min}°C | 🔼 Max: ${provedData.main.temp_max}°C
       Humidity: ${provedData.main.humidity}%
       Wind: ${provedData.wind.speed} m/s from ${provedData.wind.deg}°
       Cloud Cover: ${provedData.clouds.all}%
      `);
    }
    catch (err) {
        console.log("oh no, something went wrong", err);
    }
};
getCityWeather(city);
//# sourceMappingURL=index.js.map