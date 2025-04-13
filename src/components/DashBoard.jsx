import { useEffect, useState } from 'react';
import '../App.css';

const Dashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=5aafffd8432a49dfbb290540251304&q=London&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {weather ? (
        <div className="weather-card">
          <h3>Weather Info</h3>
          <p><strong>City:</strong> {weather.location.name}</p>
          <p><strong>Temperature:</strong> {weather.current.temp_c} °C</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Dashboard;
