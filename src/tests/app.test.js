import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

describe('App compoment', () => {
  it('App component should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.appContainer').length).toBe(1);
  });
});
