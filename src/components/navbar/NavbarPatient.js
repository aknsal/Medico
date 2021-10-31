import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const NavbarDoctor = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-collapse">
			<div className="container-fluid">
				{/* <Link className="navbar-brand" to="/"> */}
				<img src={logo} style={{ height: "50px" }} />
				{/* </Link> */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{/* <li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li> */}
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/patientdashboard" tabindex="-1" aria-disabled="true">
								Dashboard
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/patientprofile" tabindex="-1" aria-disabled="true">
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/searchdoctor" tabindex="-1" aria-disabled="true">
								Find Doctors
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/" tabindex="-1" aria-disabled="true">
								logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavbarDoctor;
