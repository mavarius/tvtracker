import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearchResults(searchResults) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { searchResults }
    })
  }
}

export default ServerActions;
