import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'
import '../stylesheets/index.scss'

export default class App extends Component {

  render () {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
