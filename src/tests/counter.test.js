import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter';

describe('Counter compoment', () => {
  it('Counter component should render', () => {
    const wrapper = shallow(<Counter initialCount={1} />);
    expect(wrapper.find('.counter-container').length).toBe(1);
  });
});
