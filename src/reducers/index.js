import {combineReducers} from 'redux';
import coin from './coinReducer';
import nominals from './nominalReducer';
//import initialState from './initialState';

const rootReducer = combineReducers({
  coin,
  nominals
});

export default rootReducer;
