import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('artist test', () => {
  it('renders the artist', () => {
    const wrapper = shallow(<Artist />);
    expect(wrapper).toMatchSnapshot();
  });
});
