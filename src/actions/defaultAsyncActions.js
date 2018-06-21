import * as types from './actions-list';
import 'isomorphic-fetch';

const endPoint = 'https://opentdb.com/api.php?amount=1'

export function defaultFetchData(data) {
  return {
    type: types.DEFAULT_FETCH,
    data
  }
}

export function defaultAsyncAction() {
  return dispatch => {
    return fetch(endPoint)
      .then(resp => resp.json())
      .then(data => {
        return dispatch(defaultFetchData(data))
      })
  }
}