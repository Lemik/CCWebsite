import * as types from './actionTypes';
import mockCoinApi from "../api/mockCoinApi.js";
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoinsSuccess(coin){
  return {type: types.LOAD_COIN_SUCCESS, coin};
}

export function createCoinSuccess(coin) {
  return {type: types.CREATE_COIN_SUCCESS, coin};
}

export function updateCoinSuccess(coin) {
  return {type: types.UPDATE_COIN_SUCCESS, coin};
}

export function loadAllCoins(){
  return function(dispatch){
     dispatch(beginAjaxCall());
     return mockCoinApi.getAllCoins().then(coin => {
     dispatch(loadCoinsSuccess(coin));
    }).catch(error => {
        throw(error);
    });
  };
}

export function saveCoin(coin) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return mockCoinApi.saveCoin(coin).then(coin => {
      coin.id ? dispatch(updateCoinSuccess(coin)) :
        dispatch(createCoinSuccess(coin));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}


export function deleteCoin(coin) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return mockCoinApi.deleteCoin(coin).then(coin => {
      coin.id ? dispatch(updateCoinSuccess(coin)) :
        dispatch(createCoinSuccess(coin));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
