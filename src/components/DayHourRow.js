import React from 'react';
import PropTypes from 'prop-types'; 
import '../styles/ForecastContainer.css';

const DayHourRow = props => (
  <div className="day-hour-row">
    <span className="hour-row-hour">{props.hourData.hour}</span>
    <img src={props.hourData.icon} alt={props.hourData.description} title={props.hourData.description} />
    <span className="hour-row-description">{props.hourData.description}</span>
    <span className="hour-row-temperature">{props.hourData.temperature}&deg;</span>
  </div>
);

DayHourRow.propTypes = {
  hourData: PropTypes.object.isRequired
};

export default DayHourRow;
