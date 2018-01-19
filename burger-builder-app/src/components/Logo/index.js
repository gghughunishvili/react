import React from 'react'

import classes from './style.css'
import logoImage from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className={classes.logo}>
        <img src={logoImage} alt="BurgerLogo" />
    </div>
)

export default logo