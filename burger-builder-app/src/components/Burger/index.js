import React, { Component } from 'react'

import BurgerIngredient from './BurgerIngredient'
import classes from './style.css'

class Burger extends Component {
    render() {
        return (
            <div className={classes.burger}>
                <BurgerIngredient type="bread-top" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="bread-bottom" />
            </div>
        )
    }
}

export default Burger
