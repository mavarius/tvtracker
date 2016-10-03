import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _searchResults = [];

class SearchStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
          _searchResults = action.payload.searchResults
          this.emit('CHANGE')
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _searchResults
  }
}

export default new SearchStore();
