import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases test', () => {
  it('renders the Releases', () => {
    const releases = [
      {
        releaseName: '2342',
        releaseArt: '333',
        id: 'dsfds',
        artist: 'abcdf'
      }
    ];
    const wrapper = shallow(<Releases releases={releases} />);
    expect(wrapper).toMatchSnapshot();
  });
});
