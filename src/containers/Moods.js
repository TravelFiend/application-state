import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import incrementorsReducer from '../reducers/incrementorsReducer';
import getFace from '../selectors/emojiSelectors';
import { incrementCoffees, incrementSnacks, incrementNaps, incrementStudies } from '../actions/incrementors';

export default function Moods() {
  const [state, dispatch] = useReducer(incrementorsReducer, { coffees: 0, snacks: 0, naps: 0, studies: 0 });

  const actions = [incrementCoffees, incrementSnacks, incrementNaps, incrementStudies];
  const face = getFace(state);

  const controlActions = actions.map(action => action);

  return (
    <>
      <Controls actions={controlActions} handleSelection={type => dispatch(type())}/>
      <Face emoji={face} />
    </>
  );
}
