import * as types from '../actions/actionTypes';
import initialState from './initialState';

 export default function coinReducer(state = initialState.coin, action){
   switch(action.type){
     case types.LOAD_COIN_SUCCESS:
      return action.coin;

      case  types.CREATE_COIN_SUCCESS:
      return [
        ...state, Object.assign({}, action.coin)
      ];

      case types.UPDATE_COIN_SUCCESS:
      return [
        ...state.filter(coin => coin.id !== action.coin.id),
        Object.assign({}, action.coin)
      ];

      default:
        return state;
   }
 }
