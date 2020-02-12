import reducer from './incrementorsReducer';
import {
  incrementCoffees,
  incrementSnacks,
  incrementNaps,
  incrementStudies
} from '../actions/incrementors';

describe('incrementors', () => {
  it('should increment coffees state', () => {
    const initialState = { coffees: 4 };
    const action = incrementCoffees();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ coffees: 5 });
  });

  it('should increment snacks state', () => {
    const initialState = { snacks: 7 };
    const action = incrementSnacks();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ snacks: 8 });
  });

  it('should increment naps state', () => {
    const initialState = { naps: 3 };
    const action = incrementNaps();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ naps: 4 });
  });

  it('should increment studies state', () => {
    const initialState = { studies: 6 };
    const action = incrementStudies();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ studies: 7 });
  });
});
