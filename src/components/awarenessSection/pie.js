import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Button from "@mui/material/Button";
import { style } from "@mui/system";

export default class App extends Component {
	state = {
		dataPie: {
			labels: [],
			datasets: [
				{
					data: [],
				},
			],
		},
		first: "",
		second: "",
	};
	handleSubmit = () => {
		const { dataPie } = this.state;
		this.setState({
			dataPie: {
				...dataPie,
				labels: [...dataPie.labels, this.state.first],
				datasets: [
					{
						...dataPie.datasets,
						data: [...dataPie.datasets[0].data, this.state.second],
					},
				],
			},
		});
	};
	handleNumChange = evt => {
		let a = parseInt(evt.target.value);
		this.setState({
			[evt.target.name]: a,
		});
	};
	handleTextChange = evt => {
		let a = evt.target.value;
		this.setState({
			[evt.target.name]: a,
		});
	};
	render() {
		const { data, dataPie } = this.state;
		console.log(dataPie);
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
					<h2>Pie Chart Maker</h2>
					<div className="chart-container" id="cs" style={{ width: "30vw" }}>
						<Pie data={dataPie} />
					</div>
					<input
						type="text"
						value={this.state.first}
						name="first"
						onChange={evt => this.handleTextChange(evt)}
						placeholder="Name of task"
						style={{
							marginBottom: "10px",
							marginTop: "10px",
						}}
					/>
					<input
						type="number"
						value={this.state.second}
						name="second"
						onChange={evt => this.handleNumChange(evt)}
						placeholder="Time(In minutes)"
					/>
					<Button
						onClick={() => {
							this.handleSubmit();
						}}
						style={{ backgroundColor: "#ffa500", marginTop: "15px" }}
					>
						Add data to chart
					</Button>
				</div>
			</React.Fragment>
		);
	}
}
