import React, { Component } from 'react'

import TvActions from '../actions/TvActions'

export default class SearchBar extends Component {
  constructor () {
    super()

    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearchBar = this.clearSearchBar.bind(this);
  }

  clearSearchBar(e) {
    const { searchInput } = this.refs;

    searchInput.value = ''
  }

  handleSearch(e) {
    e.preventDefault()
    const { searchInput } = this.refs;

    let searchTerm = searchInput.value;

    TvActions.getSearchResults(searchTerm);
  }

  render( ) {
    return (
      <div className="row searchBlock">
        <form onSubmit={this.handleSearch}>
          <input onFocus={this.clearSearchBar} type="text" className="searchBar" ref="searchInput" placeholder="search TV Shows"/>
          <button className="btn searchBtn">search</button>
        </form>
      </div>
    )
  }
}
