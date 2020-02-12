import {
  INCREMENT_COFFEES,
  INCREMENT_SNACKS,
  INCREMENT_NAPS,
  INCREMENT_STUDIES
} from '../actions/incrementors';

export default function reducer(state, action){
  switch(action.type){
    case INCREMENT_COFFEES: 
      return { ...state, coffees: state.coffees + 1 };
    case INCREMENT_SNACKS:
      return { ...state, snacks: state.snacks + 1 };
    case INCREMENT_NAPS:
      return { ...state, naps: state.naps + 1 };
    case INCREMENT_STUDIES:
      return { ...state, studies: state.studies + 1 };
    default: return state;
  }
}
