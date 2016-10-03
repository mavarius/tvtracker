import { get } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getSearchResults(searchTerm) {
    get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => {
        // console.log('API response: ', response);
        let searchResults = response.data;

        ServerActions.receiveSearchResults(searchResults);
      })
      .catch(console.error)
  }
}

export default API;
