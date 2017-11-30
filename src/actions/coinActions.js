import * as types from './actionTypes';
import coinApi from "../api/mockCoinApi.js";

export function loadCoinsSuccess(coin){
  return {type: types.LOAD_COIN_SUCCESS, coin};
}

export function loadAllCoins(){
  return function(dispatch){
     return coinApi.getAllCoins().then(coin => {
     dispatch(loadCoinsSuccess(coin));
    }).catch(error => {
        throw(error);
    });
  };
}
