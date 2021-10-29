import React from 'react'
import classes from './Card3.module.css'

const Card3 = () => {
    return (
        <div className={classes.main}>
            <div className={classes.text}>
                <h3>4 easy steps to get your Solution</h3>
            </div>
            <div className={classes.container}>
                <li className={classes.item}>
                    <img className={classes.img} src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp" alt="" />
                    <p className={classes.heading}>Search Doctor</p>
                    <p className={classes.text}>We're here to help whenever you feel ill, but keeping you healthy is our better priority</p>
                </li>
                <li className={classes.item}>
                    <img className={classes.img} src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp" alt="" />
                    <p className={classes.heading}>Check Doctor Profile</p>
                    <p className={classes.text}>We can help you find available vaccine appointments near you or notify you when availability</p>
                </li>
                <li className={classes.item}>
                    <img className={classes.img} src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp" alt="" />
                    <p className={classes.heading}>Schedule Appointment</p>
                    <p className={classes.text}>From seasonal allergies to burn identification and treatments, we have the resources.</p>
                </li>
                <li className={classes.item}>
                    <img className={classes.img} src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp" alt="" />
                    <p className={classes.heading}>Get Your Solution</p>
                    <p className={classes.text}>We can help you find available vaccine appointments near you or notify you when availability.</p>
                </li>
            </div>
        </div>
    )
}

export default Card3
