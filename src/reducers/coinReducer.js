import * as types from '../actions/actionTypes';
 export default function coinReducer(state = [], action){
   switch(action.type){
     case types.LOAD_COINS_SUCCESS:
      return action.coins;

      default:
        return state;
   }
 }
