import React from "react";
import classes from "./review.module.css";

const Reviews = () => {
	return (
		<div className={classes.container}>
			<div className={classes.first}>
				<img
					className={classes.img}
					src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp"
					alt=""
				/>
				<div className={classes.text}>
					<h1>Best Online Medical Care</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, itaque aliquam natus possimus
						consequatur minima nihil incidunt est. Sapiente, nesciunt?
					</p>
				</div>
			</div>
			<div className={classes.second}>
				<img
					className={classes.img}
					src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp"
					alt=""
				/>
				<div className={classes.text}>
					<h1>
						Could get urgent checkup <br /> in covid19
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia iusto eius magni tenetur? Est
						perspiciatis odio molestiae adipisci laboriosam.
					</p>
				</div>
			</div>
			<div className={classes.first}>
				<img
					className={classes.img}
					src="https://imgr.search.brave.com/mXi8pDr4RjpIgW_Gnyb487gHHLQcuugz6TQiPCIZT9A/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dlNXdFJkX29QUlR3/RG9UQ21rUDVnSGFF/OCZwaWQ9QXBp"
					alt=""
				/>
				<div className={classes.text}>
					<h1>
						Can attend my therapy <br /> from comfort of my home
					</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, itaque aliquam natus possimus
						consequatur minima nihil incidunt est. Sapiente, nesciunt?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
