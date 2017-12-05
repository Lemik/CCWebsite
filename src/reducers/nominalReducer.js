import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function nominalReducer(state = initialState.nominal, action) {
  switch (action.type) {
    case types.LOAD_NOMINAL_SUCCESS:
      return action.nominal;

    default:
      return state;
  }
}
