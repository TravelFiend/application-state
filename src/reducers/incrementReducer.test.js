import reducer from './incrementorsReducer';
import {
  Drink_Coffee,
  Eat_Snack,
  Take_Nap,
  Study
} from '../actions/incrementors';

describe('incrementors', () => {
  it('should increment coffees state', () => {
    const initialState = { coffees: 4 };
    const action = Drink_Coffee();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ coffees: 5 });
  });

  it('should increment snacks state', () => {
    const initialState = { snacks: 7 };
    const action = Eat_Snack();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ snacks: 8 });
  });

  it('should increment naps state', () => {
    const initialState = { naps: 3 };
    const action = Take_Nap();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ naps: 4 });
  });

  it('should increment studies state', () => {
    const initialState = { studies: 6 };
    const action = Study();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ studies: 7 });
  });
});
