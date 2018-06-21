import * as types from './actions-list';
import * as actions from './default';
import { expect } from 'code';

describe('default', () => {
  it('creates an action to display message', () => {
    const message = 'This is the default message';
    const expectedAction = { type: types.DEFAULT_ACTION, message };
    expect(actions.defaultAction(message)).to.equal(expectedAction)
  })
})