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

  it('creates an incrementSnacks action', () => {
    const action = incrementSnacks();

    expect(action).toEqual({
      type: INCREMENT_SNACKS
    });
  });

  it('creates an incrementNaps action', () => {
    const action = incrementNaps();

    expect(action).toEqual({
      type: INCREMENT_NAPS
    });
  });

  it('creates an incrementCoffees action', () => {
    const action = incrementCoffees();

    expect(action).toEqual({
      type: INCREMENT_COFFEES
    });
  });
});
