import reducer from './incrementorsReducer';
import {
  incrementDrinkCoffee,
  incrementEatSnack,
  incrementTakeNap,
  incrementStudy
} from '../actions/incrementors';

describe('incrementors', () => {
  it('should increment coffees state', () => {
    const action = incrementDrinkCoffee();
    const initialState = { coffees: 4 };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ coffees: 5 });
  });

  it('should increment snacks state', () => {
    const action = incrementEatSnack();
    const initialState = { snacks: 7 };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ snacks: 8 });
  });
});
