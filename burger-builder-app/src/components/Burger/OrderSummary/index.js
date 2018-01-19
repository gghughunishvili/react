import React from 'react'

// import classes from './style.css'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingredient)=>{
            return (
                <li key={ingredient}>
                    <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
                </li>)
        })
    return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious order with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${props.totalPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='danger' clicked={props.canceled}>Cancel</Button>
                <Button btnType='success' clicked={props.continued}>Continue</Button>
            </Aux>
    )
} 

export default orderSummary