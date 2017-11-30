import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function nominalReducer(state = initialState.nominals, action) {
  switch (action.type) {
    case types.LOAD_NOMINAL_SUCCESS:
      return action.nominals;

    default:
      return state;
  }
}
