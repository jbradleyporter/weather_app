import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import DayHourRow from '../components/DayHourRow';

it('renders without crashing', () => {
  const hourData = {
    description: 'clear skies',
    hour: '9 AM',
    icon: 'test.png',
    temperature: 72
  };
  const div = document.createElement('div');
  ReactDOM.render(<DayHourRow hourData={hourData} />, div);
});

it('renders output as expected', () => {
  const hourData = {
    description: 'clear skies',
    hour: '9 AM',
    icon: 'test.png',
    temperature: 72
  };
  const wrapper = mount(<DayHourRow hourData={hourData}/>);
  const output = <div className="day-hour-row">
      <span className="hour-row-hour">9 AM</span>
      <img src="test.png" alt="clear skies" title="clear skies" />
      <span className="hour-row-description">clear skies</span>
      <span className="hour-row-temperature">72&deg;</span>
    </div>;

  expect(wrapper.contains(output)).toEqual(true);
});