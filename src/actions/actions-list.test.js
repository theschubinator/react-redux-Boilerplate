import * as Actions from './actions-list';
import { expect } from 'code';

describe('Actions List', () => {
  it('should use a unique value for each action', () => {
    const sortedActionValues = Object.values(Actions).sort();
    sortedActionValues.reduce((current, next) => {
      expect(current).to.not.equal(next);
    })
  })
})