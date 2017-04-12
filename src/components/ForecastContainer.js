import React from 'react';
import PropTypes from 'prop-types'; 
import DayColumn from './DayColumn';
import '../styles/ForecastContainer.css';

const renderDayColumn = day => (
  <DayColumn day={day} key={day.date} />
);

const renderDayColumns = days => (
  days.map(day => renderDayColumn(day))
);

const ForecastContainer = props => {
  const days = renderDayColumns(props.days);

  return (
    <div className="forecast-container">
      <h2>5 Day Forecast for {props.city}</h2>
      <div className="days-container">
        {days}
      </div>
    </div>
  );
}

ForecastContainer.propTypes = {
  city: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ForecastContainer;
