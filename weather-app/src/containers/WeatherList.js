import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

class WeatherList extends Component {

  renderWeather (cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    // const {lon, lat} = cityData.city.coord

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="red" units="K" height={150} width={180} /></td>
        <td><Chart data={pressure} color="blue" units="hPa" height={150} width={180} /></td>
        <td><Chart data={humidities} color="green" units="%" height={150} width={180} /></td>
      </tr>
    )
  }

  render () {
    if (!this.props.weather) {
      return (<div>Please Enter City At First</div>)
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Presure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)
