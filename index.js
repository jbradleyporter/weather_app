import React from 'react';
import ReactDOM from 'react-dom';
import ForecastContainer from './components/ForecastContainer';
import './styles/ForecastContainer.css';

const parseWeatherData = data => {
  let currentDay = {};
  const today = (new Date()).toDateString();
  const fiveDays = [];
  const convertDataToDays = data => {
    let date = new Date(data.dt * 1000); // GMT -5
    date.setHours(date.getHours() - 2); // to MST
    const dateString = date.toDateString();

    if (today !== dateString) {
      if (!currentDay.date || currentDay.date !== dateString) {
        currentDay = {
          date: dateString,
          hoursData: []
        }
        fiveDays.push(currentDay);
      }
      const hourData = {
        description: data.weather[0].description,
        hour: date.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        temperature: parseInt(data.main.temp, 10)
      }
      currentDay.hoursData.push(hourData);
    }
  }

  data.forEach(convertDataToDays);

  return fiveDays;
}

const renderDOM = json => {
  const city = json.city.name;
  const weatherData = json.list;
  const fiveDays = parseWeatherData(weatherData);

  ReactDOM.render(
    <ForecastContainer city={city} days={fiveDays} />,
    document.getElementById('root')
  );
}

const callAPIAndRenderDOM = () => {
  const city = 'Denver';
  const apiCall = `http://api.openweathermap.org/data/2.5/forecast?q=${city},US&units=imperial&APPID=453e62e5a77747a7032a326f896509c9`;

  fetch(apiCall)
  .then(response => response.json())
  .then(renderDOM);
}

callAPIAndRenderDOM();