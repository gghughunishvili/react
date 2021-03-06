import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { AddDayForm } from './components/AddDayForm'
import { SkiDayList } from './components/SkiDayList'
import { NotFound404 } from './components/NotFound404'

import { Route, Router, hashHistory, IndexRoute } from 'react-router'

window.React = React

render(
    <Router history={hashHistory} >
        <Route path='/' component={App} />
        <Route path='/list-days' component={App}>
            <Route path=":filter" component={App} />
        </Route>
        <Route path='/add-day' component={App} />
        <Route path="*" component={NotFound404} />
    </Router>,
	document.getElementById('react-container')
)
/*render(
    <SkiDayCount/>,
    document.getElementById('react-container')
)*/