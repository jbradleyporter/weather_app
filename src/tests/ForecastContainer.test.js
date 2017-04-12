import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ForecastContainer from '../components/ForecastContainer';
import DayColumn from '../components/DayColumn';

it('renders without crashing', () => {
  const city = 'Denver';
  const days = [{
    date: (new Date()).toDateString(),
    hoursData: [{
      description: 'clear skies',
      hour: '9 AM',
      icon: 'test.png',
      temperature: 72
    }]
  }];
  const div = document.createElement('div');
  ReactDOM.render(<ForecastContainer city={city} days={days} />, div);
});

it('renders output as expected', () => {
  const city = 'Denver';
  const days = [{
    date: (new Date()).toDateString(),
    hoursData: [{
      description: 'clear skies',
      hour: '9 AM',
      icon: 'test.png',
      temperature: 72
    }]
  }];
  const wrapper = mount(<ForecastContainer city={city} days={days} />);
  const output = <div className="forecast-container">
      <h2>5 Day Forecast for Denver</h2>
      <div className="days-container">
        <DayColumn day={days[0]} />
      </div>
    </div>;

  expect(wrapper.contains(output)).toEqual(true);
});