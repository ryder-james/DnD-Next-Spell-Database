import { combineReducers } from 'redux';

import spellList from './spellsReducer';

const rootReducer = combineReducers({
  spellList
});

export default rootReducer;