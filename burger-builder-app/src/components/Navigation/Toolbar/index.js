import React from 'react'

import classes from './style.css'
import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar