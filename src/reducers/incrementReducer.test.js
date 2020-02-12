import reducer from './incrementorsReducer';
import {
  incrementCoffees,
  incrementSnacks,
  incrementNaps,
  incrementStudies
} from '../actions/incrementors';

describe('incrementors', () => {
  it('should increment coffees state', () => {
    const action = incrementCoffees();
    const initialState = { coffees: 4 };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ coffees: 5 });
  });

  it('should increment snacks state', () => {
    const action = incrementSnacks();
    const initialState = { snacks: 7 };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ snacks: 8 });
  });

  it('should increment naps state', () => {
    const action = incrementNaps();
    const initialState = { naps: 3 };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ naps: 4 });
  });

  it('should increment studies state');
});
