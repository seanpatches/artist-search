import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('release test', () => {
  it('renders the release', () => {
    const wrapper = shallow(<Release />);
    expect(wrapper).toMatchSnapshot();
  });
});
