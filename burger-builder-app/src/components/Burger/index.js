import React, { Component } from 'react'

import BurgerIngredient from './BurgerIngredient'
import classes from './style.css'

class Burger extends Component {
    render() {
        let transformedIngredients = Object.keys(this.props.ingredients)
            .map(ingrKey => {
                return [...Array(this.props.ingredients[ingrKey])].map((_, i) => {
                    return <BurgerIngredient key={ingrKey + 1} type={ingrKey}/>
                })
            }).reduce((arr, el) => {
                return arr.concat(el)
            }, [])
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients</p>
        } 
        return (
            <div className={classes.burger}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        )
    }
}

export default Burger
