import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./Spinner"; // for spinner

function App() {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "4b02a98bd83ea148e7617d7a7b6e3af0"; 

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
  }
  catch(err){
    setWeather(null);
    setError(err.message);
  }
  finally{
    setLoading(false);
  }
};

useEffect(() => {
  fetchWeather(city);
},[]);

const handlesearch = (e) => {
  e.preventDefault();
  fetchWeather(city);
};

  return (

    <div className="container">
      <h1>weather App</h1>
      <form className="search-box" onSubmit={handlesearch}>
        <input 
        type = "text"
        placeholder="enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} />
        <button type="submit" >Search</button>
      </form>

      {/* {loading && <p>loading...</p>} */}
      {loading && <Spinner />}   

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C </p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Wind Speed : {weather.wind.speed}km/h</p>
        </div>

      )}
    </div>
   
  )
}

export default App
