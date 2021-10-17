import React, { useState } from "react";

const GetHolidaysAndWeather = () => {
  const [weather, setWeather] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [city, setCity] = useState("");
  const URIEncodedCity = encodeURI(city);
  const [loading, setLoading] = useState(true);

  async function getAllData() {
    setLoading(true);

    // fetch weather
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${URIEncodedCity}&units=imperial&APPID=8f80c75db7eb418e222f8e5f845d5ab1`
    );
    const weatherJSON = await weatherResponse.json();
    setWeather([weatherJSON]);

    // get country code from weather data
    const countryCode = weatherJSON.sys.country;

    // fetch holidays
    const holidaysResponse = await fetch(
      `https://calendarific.com/api/v2/holidays?&api_key=acdb2623ea9e104cd44f12da479c5d188225df0a&type=national&year=2021&country=${countryCode}`
    );
    const holidaysJSON = await holidaysResponse.json();
    setHolidays(holidaysJSON);
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city to get the weather from: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* make sure data is done loading before rendering to page */}
      {!loading && (
        <div>
          {weather.map((data) => (
            <p key={data.id}>
              It is {data.main.temp.toFixed(0)} degrees in {data.name}. Here are the
              holidays in {data.name}
            </p>
          ))}
          {holidays.response.holidays.map((holiday, index) => (
            <p key={index}>{holiday.name}</p>
          ))}
        </div>
      )}
      {loading && weather.length > 0 && <h2>Loading Weather Data...</h2>}
    </div>
  );
};

export default GetHolidaysAndWeather;
