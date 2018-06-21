import * as types from '../actions/actions-list'

const defaultState = []

function defaultAction(state, action) {
  return action.message;
}

export default function(state = defaultState, action) {
  const actionsHandler = {
      [types.DEFAULT_ACTION]: defaultAction,
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}