import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import TvActions from '../actions/TvActions'

export default class SearchList extends Component {
  constructor() {
    super()

  }


  render() {
    const { searchResults, favIds } = this.props;

    return (
        <div className="row">
          {searchResults ?
            <div className="SearchList">
              { searchResults.map((result, index) => {
                return(
                  <div className='searchResult' key={index}>
                    {result.show.image ? <img src={result.show.image.medium}/> : <span className='noImage'>no image</span>}
                    <h2>{result.show.name}</h2>
                    <p>{result.show.summary}</p>
                    {(favIds.indexOf(result.show.id) !== -1) ? <button className='btn btn-danger isFavorite' onClick={() => TvActions.removeFavorite(result)}>❤</button> : <button className='btn btn-default notFavorite' onClick={() => TvActions.addFavorite(result)}>❤</button> }
                  </div>
                )
              }) }
            </div>
          : null }
        </div>
    )
  }
}
