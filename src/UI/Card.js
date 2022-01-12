import React from 'react'

import classes from './Card.module.css'

const Card = props => {

    return(
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
        // to act as a wrapper use props.children which gives us the content between opening and closing of the card component 
    )
}

export default Card