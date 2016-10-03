import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage'

let _favorites = Storage.readWrite('favorites') || [];

let _favIds = Storage.readWrite('favIds') || [];

// let _favorites = [];

class FavoritesStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'ADD_FAVORITE':
          const { entry } = action.payload
          _favorites = [... _favorites, entry]
          _favIds = [... _favIds, entry.show.id]
          // console.log('_favorites: ', _favorites);
          // console.log('_favIds: ', _favIds);
          this.emit('CHANGE')
          break;
        case 'REMOVE_FAVORITE':
          const { id } = action.payload.show
          console.log('The ID to remove: ', id);
          _favorites = _favorites.filter(id => _favorites.show.id !== id)
          _favIds = _favIds.filter(id => _favIds.id !== id)
          console.log('_favorites: ', _favorites);
          console.log('_favIds: ', _favIds);
          this.emit('CHANGE')
          break;
      }
    });

    this.on('CHANGE', () => {
      Storage.readWrite('favorites', _favorites);
      Storage.readWrite('favIds', _favIds);
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getFavorites() {
    return _favorites
  }

  getIds() {
    return _favIds
  }
}

export default new FavoritesStore();
