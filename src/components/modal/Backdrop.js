import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = ({open,onClose}) => {

    if(!open)
        return null;

    return (
        <div className={classes.backdrop} onClick={onClose}/>
    )
}

export default Backdrop
