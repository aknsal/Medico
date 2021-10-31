import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class Chart extends Component {
	state = {
		dataPie: {
			labels: [
				"People supporting people having mental illness",
				"People having higher judgment against people having mental illness",
				"People fearfull of people having mental illness",
			],
			datasets: [
				{
					data: ["27", "47", "26"],
					backgroundColor: ["red", "blue", "green"],
				},
			],
		},
	};

	render() {
		const { dataPie } = this.state;
		return (
			<React.Fragment>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						marginTop: "20px",
					}}
				>
					<div className="chart-container" id="cs" style={{ width: "30vw" }}>
						<Pie data={dataPie} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
