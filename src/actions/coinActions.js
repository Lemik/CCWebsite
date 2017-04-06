import * as types from './actionTypes';
import coinApi from "../api/mockCoinApi.js";

export function loadCoinsSuccess(coins){
  return {type: types.LOAD_COINS_SUCCESS, coins};
}

export function loadAllCoins(){
  return function(dispatch){
     return coinApi.getAllCoins().then(coins => {
     dispatch(loadCoinsSuccess(coins));
    }).catch(error => {
        throw(error);
    });
  };
}
