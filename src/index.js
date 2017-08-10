import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
// import { SkiDayList } from './components/SkiDayList'
// import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
	<App/>,
	document.getElementById('react-container')
)
/*render(
    <SkiDayCount/>,
    document.getElementById('react-container')
)*/