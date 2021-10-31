import React from "react";
import classes from "./awarenessSection.module.css";
import Chart from "./chart";

const AwarenessSection = props => {
	return (
		<div className={classes.container}>
			<div className={classes.text}>
				India is currently home to a population of over one billion citizens. A study conducted by the Word
				Health Organization in 2015 shows that one in five Indians may suffer from depression in their
				lifetime, equivalent to 200 million people. <br />
				<br /> Due to the stigma associated with mental illness, a lack of awareness, and limited access to
				professional help, only 10-12% of these sufferers will seek help. <br /> <br />
				<span style={{ color: "#034e70", fontWeight: "BOLD" }}>Medico</span>,{" "}
				<i>A Heritage in Care Reputation in Excellence </i> is an initiative to help the patients get the best
				medical care, without the fear of taboo. Medico focuses on providing the most efficient way to search
				for the best doctors according to your needs.
			</div>
			<div className={classes.chart}>
				<Chart />
			</div>
		</div>
	);
};

export default AwarenessSection;
