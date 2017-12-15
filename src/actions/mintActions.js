import mintApi from '../api/mockMintApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMintSuccess(mint) {
  return {type: types.LOAD_MINT_SUCCESS, mint};
}

export function loadMint() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return mintApi.getAllMints().then(mint => {
      dispatch(loadMintSuccess(mintApi));
    }).catch(error => {
      throw(error);
    });
  };
}
