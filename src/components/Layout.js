import React, { Component } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className='container'>
          <h1 className='app-title'>TV Tracker</h1>
          <NavLink className='btn navBtn' to="/" onlyActiveOnIndex>SEARCH</NavLink>
          <NavLink className='btn navBtn' to="/FavoritesView/" >FAVORITES</NavLink>

          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
