import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists Component', () => {
  it('renders the Artists list', () => {
    const artists = [
      { name: 'Billy Strings',
        id: 'fffffffff#'
      }, {
        name: 'Billy Strang',
        id: 'gggggggggd'
      }
    ];
    const wrapper = shallow(<Artists artists={artists}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
