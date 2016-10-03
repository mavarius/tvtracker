import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchView from './components/SearchView'
import FavoritesView from './components/FavoritesView'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>
      <IndexRoute component={SearchView}></IndexRoute>
      <Route path='/FavoritesView/' component={FavoritesView}></Route>
    </Route>

  </Router>,
  document.getElementById('root')
);
