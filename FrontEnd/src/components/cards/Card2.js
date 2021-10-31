import React from 'react'
import classes from './Card2.module.css'
import image1 from "../../assets/images/doctor.jpg";
import image2 from "../../assets/images/doctorVideo.jpg"

const Card2 = () => {
    return (
        <div className={classes.container}>
            <div className={classes.first}>
                <img className={classes.img} src={image1} alt="" />
                <div className={classes.text}>
                    <h1>
                        Your Nearest Doctor
                    </h1>
                    <p>
                        Select preffered doctor and time slot to book an appointment or video consultation
                    </p>
                </div>
            </div>
            <div className={classes.second}>
                <img className={classes.img} src={image2} alt="" />
                <div className={classes.text}>
                    <h1>
                        Urgent Online Care
                    </h1>
                    <p>
                        Tell us your health and we will assign a top doctor to you.
                    </p>
                </div>
            </div>
            {/* <div className={classes.first}>
                <img className={classes.img} src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp" alt="" />
                <div className={classes.text}>
                    <h1>
                        What our patients say
                    </h1>
                    <p>
                        
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default Card2
