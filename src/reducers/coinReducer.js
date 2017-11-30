import * as types from '../actions/actionTypes';
import initialState from './initialState';

 export default function coinReducer(state = initialState.coin, action){
   switch(action.type){
     case types.LOAD_COIN_SUCCESS:
      return action.coin;

      default:
        return state;
   }
 }
