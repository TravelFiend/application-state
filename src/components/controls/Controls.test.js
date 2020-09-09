import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';
import {
  Drink_Coffee,
  Eat_Snack,
  Take_Nap,
  Study
} from '../../actions/incrementors';
 

describe('Controls component', () => {
  let wrapper;
  let handleSelection;
  beforeEach(() => {
    const actions = [Drink_Coffee, Eat_Snack, Take_Nap, Study];
    handleSelection = jest.fn();

    wrapper = shallow(<Controls
      actions={actions}
      handleSelection={handleSelection} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handlesSelection with the action name', () => {
    wrapper.findWhere(el => el.key() === 'Drink_Coffee').simulate('click');
    expect(handleSelection).toHaveBeenCalled();
  });
});
  
