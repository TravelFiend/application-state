import {
  INCREMENT_COFFEES,
  incrementCoffees,
  INCREMENT_SNACKS,
  incrementSnacks,
  INCREMENT_NAPS,
  incrementNaps,
  INCREMENT_STUDIES,
  incrementStudies
} from './incrementors';

describe('actions', () => {
  it('creates an incrementCoffees action', () => {
    const action = incrementCoffees();

    expect(action).toEqual({ type: INCREMENT_COFFEES });
  });
});
