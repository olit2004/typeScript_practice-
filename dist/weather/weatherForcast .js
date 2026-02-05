import { z } from "zod";
export const CoordinatesSchema = z.object({
    lon: z.number(),
    lat: z.number(),
});
export const WeatherConditionSchema = z.object({
    id: z.number(),
    main: z.string(),
    description: z.string(),
    icon: z.string(),
});
export const MainWeatherSchema = z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    sea_level: z.number().optional(),
    grnd_level: z.number().optional(),
    temp_kf: z.number().optional(),
});
export const WindSchema = z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number().optional(),
});
export const CloudsSchema = z.object({
    all: z.number(),
});
export const WeatherResponseSchema = z.object({
    coord: CoordinatesSchema,
    weather: z.array(WeatherConditionSchema),
    main: MainWeatherSchema,
    wind: WindSchema,
    clouds: CloudsSchema,
    name: z.string(),
    cod: z.number(),
});
export const ForecastItemSchema = z.object({
    dt: z.number(),
    main: MainWeatherSchema,
    weather: z.array(WeatherConditionSchema),
    clouds: CloudsSchema,
    wind: WindSchema,
    visibility: z.number(),
    pop: z.number(),
    rain: z.object({ "3h": z.number() }).optional(),
    sys: z.object({ pod: z.string() }),
    dt_txt: z.string(),
});
export const ForecastResponseSchema = z.object({
    cod: z.string(),
    message: z.number(),
    cnt: z.number(),
    list: z.array(ForecastItemSchema),
    city: z
        .object({
        id: z.number(),
        name: z.string(),
        coord: CoordinatesSchema,
        country: z.string(),
        population: z.number(),
        timezone: z.number(),
        sunrise: z.number(),
        sunset: z.number(),
    })
        .optional(),
});
//# sourceMappingURL=weatherForcast%20.js.map