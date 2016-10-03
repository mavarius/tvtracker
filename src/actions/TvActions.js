import API from '../API'
import AppDispatcher from '../AppDispatcher'

const TvActions = {
  getSearchResults(searchTerm) {
    API.getSearchResults(searchTerm);
  },

  addFavorite(entry) {
    AppDispatcher.dispatch({
      type: 'ADD_FAVORITE',
      payload: { entry }
    })
  },

  removeFavorite(id) {
    AppDispatcher.dispatch({
      type: 'REMOVE_FAVORITE',
      payload: { id }
    })
  }
}

export default TvActions;
