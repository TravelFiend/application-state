import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';
import {
  incrementCoffees,
  INCREMENT_COFFEES,
  incrementSnacks,
  incrementNaps,
  incrementStudies
} from '../../actions/incrementors';
 

describe('Controls component', () => {
  let wrapper;
  let handleSelection;
  beforeEach(() => {
    const actions = [incrementCoffees, incrementSnacks, incrementNaps, incrementStudies];
    handleSelection = jest.fn();

    wrapper = shallow(<Controls
      actions={actions}
      handleSelection={handleSelection} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handlesSelection with the action name', () => {
    wrapper.findWhere(el => el.key() === 'incrementCoffees').simulate('click');
    expect(handleSelection).toHaveBeenCalled();
  });
});
  
