import React from 'react'

import classes from './style.css'
import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import Backdrop from '../../UI/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.close]
    if (props.open) {
        attachedClasses = [classes.sideDrawer, classes.open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo/>
                </div>
                <NavigationItems/>
            </div>
        </Aux>
    )   
}

export default sideDrawer