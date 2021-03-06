import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger'
import BuildControls from '../../components/Burger/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.8,
  meat: 1.5,
  bacon: 1.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    
    purchaseCanceled = () => {
        this.setState({purchasing: false})
    }

    purchaseContinuedHandler = () => {
        alert("You've just purchased the burger. Bon appetit")
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey]
            } )
            .reduce( ( sum, el ) => {
                return sum + el
            }, 0 )
        this.setState( { purchasable: sum > 0 } )
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } )
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type]
        if ( oldCount <= 0 ) {
            return
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } )
        this.updatePurchaseState(updatedIngredients)
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceled}>
                    <OrderSummary 
                        totalPrice={this.state.totalPrice.toFixed(2)}
                        canceled={this.purchaseCanceled}
                        continued={this.purchaseContinuedHandler}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Aux>
        )
    }
}

export default BurgerBuilder
