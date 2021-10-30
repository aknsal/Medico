import React from 'react'
import classes from './Card3.module.css'
import image1 from '../../assets/images/search.png'
import image2 from '../../assets/images/docprofile.png'
import image3 from '../../assets/images/calender.png'
import image4 from '../../assets/images/solution.png'

const Card3 = () => {
    return (
        <div className={classes.main}>
            <div className={classes.text}>
                <h3>4 easy steps to get your Solution</h3>
            </div>
            <div className={classes.container}>
                <li className={classes.item}>
                    <img className={classes.img} src={image1} alt="doctor" />
                    <p className={classes.heading}>Search Doctor</p>
                    <p className={classes.text1}>We're here to help whenever you feel ill, but keeping you healthy is our better priority</p>
                </li>
                <li className={classes.item}>
                    <img className={classes.img} src={image2} alt="profile" />
                    <p className={classes.heading}>Check Doctor Profile</p>
                    <p className={classes.text1}>We can help you find available vaccine appointments near you or notify you when availability</p>
                </li>
                <li className={classes.item}>
                    <img className={classes.img} src={image3} alt="calender" />
                    <p className={classes.heading}>Schedule Appointment</p>
                    <p className={classes.text1}>From seasonal allergies to burn identification and treatments, we have the resources.</p>
                </li>
                <li className={classes.item}>
                    <img className={classes.img} src={image4} alt="solution" />
                    <p className={classes.heading}>Get Your Solution</p>
                    <p className={classes.text1}>We can help you find available vaccine appointments near you or notify you when availability.</p>
                </li>
            </div>
        </div>
    )
}

export default Card3
