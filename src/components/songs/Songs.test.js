import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs test', () => {
  it('renders the Releases', () => {
    const songs = [
      {
        artist: 'artist1',
        songTitle: 'title1',
        id: 'billy'
      },
      {
        artist: 'artist2',
        songTitle: 'title3',
        id: 'strings'
      }
    ];
    const wrapper = shallow(<Songs songs={songs} />);
    expect(wrapper).toMatchSnapshot();
  });
});
