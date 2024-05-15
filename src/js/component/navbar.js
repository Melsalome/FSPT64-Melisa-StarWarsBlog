import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img className="starwars-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1041px-Star_Wars_Logo.svg.png"></img>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
