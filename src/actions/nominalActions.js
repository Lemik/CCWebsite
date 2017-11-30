import nominalApi from '../api/mockNominalApi';
import * as types from './actionTypes';
//import {beginAjaxCall} from './ajaxStatusActions';

export function loadNominalsSuccess(nominals) {
  return {type: types.LOAD_NOMINAL_SUCCESS, nominals};
}

export function loadNominals() {
  return dispatch => {
//    dispatch(beginAjaxCall());
    return nominalApi.getAllNominals().then(nominals => {
      dispatch(loadNominalsSuccess(nominals));
    }).catch(error => {
      throw(error);
    });
  };
}
