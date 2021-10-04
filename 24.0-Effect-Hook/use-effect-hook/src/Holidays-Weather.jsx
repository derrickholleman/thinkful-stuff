import React, { useState } from "react";

const GetHolidaysAndWeather = () => {
  const [weather, setWeather] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [city, setCity] = useState("");
  const URIEncodedCity = encodeURI(city);

  async function getWeather() {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${URIEncodedCity}&units=imperial&APPID=8f80c75db7eb418e222f8e5f845d5ab1`
    );
    const weatherJSON = await weatherResponse.json();
    setWeather([weatherJSON]);
    getHolidays(weatherJSON.sys.country);

    async function getHolidays(country) {
      const holidaysResponse = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=acdb2623ea9e104cd44f12da479c5d188225df0a&type=national&year=2021&country=${country}`
      );
      const holidaysJSON = await holidaysResponse.json();
      setHolidays(holidaysJSON);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

//   console.log(holidays.response.holidays)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {weather.map((data) => (
        <p key={data.id}>
          It is {data.main.temp} degrees in {data.name}. Here are the holidays
          in {data.name}
        </p>
      ))}
      {holidays.response.holidays.map((holiday, index) => (
        <p key={index}>{holiday.name}</p>
      ))}
    </div>
  );
};

export default GetHolidaysAndWeather;
