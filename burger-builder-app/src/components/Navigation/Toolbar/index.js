import React from 'react'

import classes from './style.css'
import Logo from '../../Logo'

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar