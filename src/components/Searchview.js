import React, { Component } from 'react'

import SearchBar from './SearchBar'
import SearchList from './SearchList'

import SearchStore from '../stores/SearchStore'
import FavoritesStore from '../stores/FavoritesStore'
import TvActions from '../actions/TvActions'

export default class SearchView extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: SearchStore.getAll(),
      favorites: FavoritesStore.getFavorites(),
      favIds: FavoritesStore.getIds()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange)
  }

  componentDidMount() {
    SearchStore.getAll()
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      searchResults: SearchStore.getAll(),
      favorites: FavoritesStore.getFavorites(),
      favIds: FavoritesStore.getIds()
    })
  }

  render() {
    const { searchResults, favorites, favIds } = this.state;

    return (
      <div className="row">

        <SearchBar searchResults={searchResults}/>
        <SearchList searchResults={searchResults} favorites={favorites} favIds={favIds}/>
      </div>
    )
  }
}
