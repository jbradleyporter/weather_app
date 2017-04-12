import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import DayColumn from '../components/DayColumn';
import DayHourRow from '../components/DayHourRow';

it('renders without crashing', () => {
  const day = {
    date: (new Date()).toDateString(),
    hoursData: [{
      description: 'clear skies',
      hour: '9 AM',
      icon: 'test.png',
      temperature: 72
    }]
  };
  const div = document.createElement('div');
  ReactDOM.render(<DayColumn day={day} />, div);
});

it('renders output as expected', () => {
  const day = {
    date: (new Date(2017, 3, 12)).toDateString(),
    hoursData: [{
      description: 'clear skies',
      hour: '9 AM',
      icon: 'test.png',
      temperature: 72
    }]
  };
  const wrapper = mount(<DayColumn day={day}/>);
  const output = <div className="day-column">
      <div className="day-name">Wed</div>
      <div className="day-date">Apr 12</div>
      <DayHourRow hourData={day.hoursData[0]} />
    </div>;

  expect(wrapper.contains(output)).toEqual(true);
});