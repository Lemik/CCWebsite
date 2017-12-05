import nominalApi from '../api/mockNominalApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadNominalsSuccess(nominal) {
  return {type: types.LOAD_NOMINAL_SUCCESS, nominal};
}

export function loadNominals() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return nominalApi.getAllNominals().then(nominal => {
      dispatch(loadNominalsSuccess(nominal));
    }).catch(error => {
      throw(error);
    });
  };
}
