import React from 'react'

import classes from './style.css'
import NavigationItem from './NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default navigationItems