import {
  INCREMENT_DRINK_COFFEE,
  INCREMENT_EAT_SNACK,
  INCREMENT_TAKE_NAP,
  INCREMENT_STUDY
} from '../actions/incrementors';

export default function reducer(state, action){
  switch(action.type){
    case INCREMENT_DRINK_COFFEE: 
      return { ...state, coffees: state.coffees + 1 };
    case INCREMENT_EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    default: return state;
  }
}
