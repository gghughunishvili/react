import React from 'react'

import classes from './style.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-150)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal