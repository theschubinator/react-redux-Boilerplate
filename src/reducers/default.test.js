import * as types from '../actions/actions-list';
import defaultReducer from './default';
import { expect } from 'code';

describe('Given Default Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = []
  })

  it('should return the initial state when none is given', () => {
    const expectedState = defaultState;
    expect(defaultReducer(undefined, {})).to.equal(expectedState);
  })

  it('should add default message to state', () => {
    const expectedState = ['This is the default']
    expect(defaultReducer(defaultState, { type: types.DEFAULT_ACTION, message: expectedState })).to.equal(expectedState)
  })
})