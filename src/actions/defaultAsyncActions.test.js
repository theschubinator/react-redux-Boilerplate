import * as types from './actions-list';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import { defaultFetchData, defaultAsyncAction } from './defaultAsyncActions';
import { expect } from 'code';
import 'isomorphic-fetch';

describe('defaultAsyncActions', () => {
  
  it('defaultFetchData should create the correct action', () => {
    const data = ['This is the default message']
    const expectedAction = { type: types.DEFAULT_FETCH, data }
    expect(defaultFetchData(data)).to.equal(expectedAction);
  })

  describe('defaultAsyncAction', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let fetchStub;
  
    beforeEach(() => {
      fetchStub = sinon.stub(global, 'fetch');
    })
  
    afterEach(() => {
      sinon.restore();
    })
  
    it('should call defaultAsyncAction with the correct endPoint', () => {
      const mockData = ['This is my default message'];
      const store = mockStore([]);
  
      fetchStub.resolves({ json: sinon.stub().returns(mockData) });
  
      return store.dispatch(defaultAsyncAction())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).to.equal(defaultFetchData(mockData))
          sinon.assert.calledWithExactly(fetchStub, 'https://opentdb.com/api.php?amount=1')
        })
    })
  })
})
