import React, { Component } from 'react'

import TvActions from '../actions/TvActions'

import FavoritesStore from '../stores/FavoritesStore'

export default class FavoritesView extends Component {
  constructor() {
    super();

    this.state = {
      favorites: FavoritesStore.getFavorites(),
      favIds: FavoritesStore.getIds()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    FavoritesStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    FavoritesStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      favorites: FavoritesStore.getFavorites(),
      favIds: FavoritesStore.getIds()
    })
  }

  render() {
    const { favorites, favIds } = this.state;

    return (
      <div className="row FavoritesView">
        <h1>Favorites</h1>

        {favorites ?
            <div className="FavoritesList">
              { favorites.map((item, index) => {
                return(
                  <div className='searchResult' key={index}>
                    {item.show.image ? <img src={item.show.image.medium}/> : <span className='noImage'>no image</span>}
                    <h2>{item.show.name}</h2>
                    <p>{item.show.summary}</p>
                    <button className='btn btn-danger isFavorite' onClick={() => TvActions.removeFavorite(favorite.show.id)}>❤</button>
                  </div>
                )
              }) }
            </div>
        : <span className="loadingMessage">fetching your favorites...</span>}
      </div>
    )
  }
}
