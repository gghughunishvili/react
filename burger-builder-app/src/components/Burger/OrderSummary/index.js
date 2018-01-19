import React, {Component} from 'react'

// import classes from './style.css'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button'

class OrderSummary extends Component {
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((ingredient)=>{
                return (
                    <li key={ingredient}>
                        <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}
                    </li>)
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious order with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.totalPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='danger' clicked={this.props.canceled}>Cancel</Button>
                <Button btnType='success' clicked={this.props.continued}>Continue</Button>
            </Aux>
        )
    }
} 

export default OrderSummary