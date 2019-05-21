import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('release test', () => {
  it('renders the release', () => {
    const wrapper = shallow(<Song />);
    expect(wrapper).toMatchSnapshot();
  });
});
