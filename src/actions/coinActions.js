import * as types from './actionTypes';
import coinApi from "../api/mockCoinApi.js";

export function loadCoinsSuccess(coin){
  return {type: types.LOAD_COIN_SUCCESS, coin};
}

export function createCoinSuccess(course) {
  return {type: types.CREATE_COIN_SUCCESS, course};
}

export function updateCoinSuccess(course) {
  return {type: types.UPDATE_COIN_SUCCESS, course};
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

export function saveCoin(coin) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return coinApi.saveCoin(coin).then(coin => {
      coin.id ? dispatch(updateCoinSuccess(coin)) :
        dispatch(createCoinSuccess(coin));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
