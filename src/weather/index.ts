import readline from "readline";
import fetch from "node-fetch"; // install with: npm install node-fetch


const API_KEY = "YOUR_API_KEY";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a city name: ", async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.statusText}`);
    }

    const data = await response.json();

    console.log(`Weather in ${data.name}, ${data.sys.country}:`);
    console.log(`Temperature: ${data.main.temp} °C`);
    console.log(`Condition: ${data.weather[0].description}`);
  } catch (error) {
    console.error("Failed to get weather:", error.message);
  } finally {
    rl.close();
  }
});