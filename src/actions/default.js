import * as types from './actions-list';

export function defaultAction(message) {
  return {
    type: types.DEFAULT_ACTION,
    message
  }
}