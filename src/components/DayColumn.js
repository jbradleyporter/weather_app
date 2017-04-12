import React from 'react';
import PropTypes from 'prop-types'; 
import DayHourRow from './DayHourRow';
import '../styles/ForecastContainer.css';

const renderDayHourRow = hourData => (
  <DayHourRow hourData={hourData} key={hourData.hour}/>
);

const renderDayHourRows = hoursData => (
  hoursData.map(hourData => renderDayHourRow(hourData))
);

const DayColumn = props => {
  const name = props.day.date.substr(0, 3);
  const shortDate = props.day.date.substr(4, 6);
  const dayHourRows = renderDayHourRows(props.day.hoursData);

  return (
    <div className="day-column">
      <div className="day-name">{name}</div>
      <div className="day-date">{shortDate}</div>
      {dayHourRows}
    </div>
  );
}

DayColumn.propTypes = {
  day: PropTypes.object.isRequired
};

export default DayColumn;