import React from 'react'

import classes from './style.css'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
   return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious order with the following ingredients:</p>
        </Aux>
   )
}

export default orderSummary