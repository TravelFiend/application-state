import {
  INCREMENT_COFFEES,
  Drink_Coffee,
  INCREMENT_SNACKS,
  Eat_Snack,
  INCREMENT_NAPS,
  Take_Nap,
  INCREMENT_STUDIES,
  Study
} from './incrementors';

describe('actions', () => {
  it('creates an Drink_Coffee action', () => {
    const action = Drink_Coffee();

    expect(action).toEqual({ type: INCREMENT_COFFEES });
  });

  it('creates an Eat_Snack action', () => {
    const action = Eat_Snack();

    expect(action).toEqual({
      type: INCREMENT_SNACKS
    });
  });

  it('creates an Take_Nap action', () => {
    const action = Take_Nap();

    expect(action).toEqual({
      type: INCREMENT_NAPS
    });
  });

  it('creates an Study action', () => {
    const action = Study();

    expect(action).toEqual({
      type: INCREMENT_STUDIES
    });
  });
});
