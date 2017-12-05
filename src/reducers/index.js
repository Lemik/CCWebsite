import {combineReducers} from 'redux';
import coin from './coinReducer';
import nominal from './nominalReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  coin,
  nominal,
  ajaxCallsInProgress
});

export default rootReducer;
