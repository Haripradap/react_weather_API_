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
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Dashboard</h2>
        {weather ? (
          <div className="weather-details">
            <h3>Weather Info</h3>
            <p><strong>City:</strong> {weather.location.name}</p>
            <p><strong>Temperature:</strong> {weather.current.temp_c} °C</p>
            <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          </div>
        ) : (
          <p className="loading-text">Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
