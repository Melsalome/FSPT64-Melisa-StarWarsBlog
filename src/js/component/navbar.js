import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import { Context } from "../store/appContext";



export const Navbar = () => {
	const {store} = useContext(Context)
	// const [objects, setObjects] = useState(['character','planet','vehicle'])
	const {actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img className="starwars-logo" src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"></img>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
  				<button className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    				Favorites {store.favoritesList.length}
  				</button>
 			 <ul className="dropdown-menu">
			{store.favoritesList.map( (favorite, favoriteIndex) => {
				return <li key={favoriteIndex}>
					<span>{favorite}</span>
					<button type="button" onClick={() => actions.deleteFavorite(favoriteIndex)}> <span className="material-symbols-outlined">delete</span></button>
				</li>})
			}
 			 </ul>
			</div>
			</div>
		</nav>
	);
};
