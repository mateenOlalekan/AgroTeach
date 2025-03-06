import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { WiHumidity, WiStrongWind, WiBarometer, WiRain } from "react-icons/wi";
import { Sun, Cloud, CloudRain, CloudSnow, Wind, Thermometer, Clock, Sunrise, CloudLightning } from "lucide-react";
import Loading from "./WeatherLoading";
import AOS from "aos";
import "aos/dist/aos.css";

function MainSec() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const apiKey = "1149d0079605aaeceec6d0c8bf927f5a";
  const [city, setCity] = useState("Lagos");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");
        const weather = await weatherResponse.json();
        setWeatherData(weather);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data");
        const forecastJson = await forecastResponse.json();
        setForecastData(forecastJson);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      setCity(searchInput);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit"
    }).replace(/\//g, "-");
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <Sun size={32} className="text-yellow-500" />;
      case "Clouds":
        return <Cloud size={32} className="text-gray-500" />;
      case "Rain":
        return <CloudRain size={32} className="text-blue-600" />;
      case "Snow":
        return <CloudSnow size={32} className="text-cyan-400" />;
      case "Thunderstorm":
        return <CloudLightning size={32} className="text-purple-700" />;
      case "Windy":
        return <Wind size={32} className="text-green-500" />;
      default:
        return <Thermometer size={32} className="text-red-500" />;
    }
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center p-6">{error}</p>;

  return (
    <div className="min-h-screen w-full flex flex-col p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-background text-foreground shadow-xl p-4 rounded-lg border border-gray-300 mb-6 gap-4 sm:gap-0">
        <span className="font-semibold text-lg">Weather App</span>
        <p className="text-xl font-medium text-center sm:text-left">Current Location: {city}</p>
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden w-full sm:w-80">
          <input
            type="text"
            placeholder="Enter City Name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full p-2 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-700 text-white px-4 py-2 flex items-center hover:bg-blue-800 transition"
          >
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {/* Weather Overview Section */}
        <div className="bg-white bg-opacity-30 text-center justify-evenly backdrop-blur-lg p-6 rounded-lg shadow-md border border-gray-200 flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <p className="font-semibold">🌍 {city || "Unknown City"}</p>
            <p className="font-semibold">{weatherData?.timezone || "N/A"}</p>
          </div>
          <p className="text-6xl font-semibold">
            {weatherData?.main?.temp !== undefined ? `${weatherData.main.temp}°C` : "Loading..."}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-1">
              <span>Lat: </span>
              <p>{weatherData?.coord?.lat ?? "N/A"}</p>
            </div>
            <div className="flex items-center gap-1">
              <span>Lon: </span>
              <p>{weatherData?.coord?.lon ?? "N/A"}</p>
            </div>
            <div className="flex items-center gap-1">
              <span>Tz Offset: </span>
              <p>{weatherData?.timezone_offset ?? "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Weather Details Section */}
        <div className="grid grid-cols-2 gap-2" data-aos="fade-up">
          {[
            { icon: <WiHumidity className="text-3xl text-blue-400" />, label: "Humidity", value: `${weatherData?.main?.humidity}%` },
            { icon: <WiStrongWind className="text-3xl text-orange-400" />, label: "Wind Speed", value: `${weatherData?.wind?.speed} km/h` },
            { icon: <WiRain className="text-3xl text-purple-400" />, label: "Rainfall", value: `${weatherData?.rain ? weatherData.rain["1h"] : 0} mm` },
            { icon: <WiBarometer className="text-3xl text-green-400" />, label: "Pressure", value: `${weatherData?.main?.pressure} hPa` },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-30 backdrop-blur-lg p-4 rounded-lg shadow-md border border-gray-200 flex flex-col justify-center items-center"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              {item.icon}
              <p className="font-semibold">{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* 7-Hour Forecast Section */}
        <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 col-span-2 rounded-lg shadow-md border border-gray-200" data-aos="fade-left">
          <h3 className="font-semibold mb-3">7-Hour Forecast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {forecastData?.list?.slice(0, 7).map((hour, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center text-center bg-gray-100 backdrop-blur-lg p-4 rounded-lg shadow-lg"
                data-aos="fade-right"
              >
                <p>{new Date(hour.dt * 1000).getHours()}:00</p>
                {getWeatherIcon(hour.weather[0].main)}
                <p>{hour.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Forecast Section */}
        <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 col-span-2 rounded-lg shadow-md border border-gray-200" data-aos="fade-up">
          <h3 className="font-semibold mb-3">7-Day Forecast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {forecastData?.list
              ?.filter((_, index) => index % 6 === 0)
              .map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center text-center bg-gray-100 backdrop-blur-lg p-4 rounded-lg shadow-lg"
                  data-aos="fade-down"
                >
                  <p>{formatDate(day.dt)}</p>
                  {getWeatherIcon(day.weather[0].main)}
                  <p>{day.main.temp}°C</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSec;