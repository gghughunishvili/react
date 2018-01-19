import React from 'react'

import classes from './style.css'
import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.logo}>
            <Logo/>
        </div>
        <nav className={classes.desktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar