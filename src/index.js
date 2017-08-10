import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

/*render(
	<SkiDayList days={
        [
            {
                resort: "Safari Mountain",
                date: new Date("2/8/2017"),
                powder: true,
                backcountry: false
            },
            {
                resort: "Baja California",
                date: new Date("6/10/2017"),
                powder: false,
                backcountry: true
            },
            {
                resort: "Victoria Waterfall",
                date: new Date("11/8/2017"),
                powder: false,
                backcountry: false
            }
        ]
    } />,
	document.getElementById('react-container')
)*/
render(
    <SkiDayCount/>,
    document.getElementById('react-container')
)