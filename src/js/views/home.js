import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Character from "../component/Character";
import Planet from "../component/Planet";
import Vehicle from "../component/Vehicle";
import  Navbar  from "../component/navbar";

export const Home = () => {
const {store, actions} = useContext(Context);

useEffect( () => {
	actions.getPeopleList();
	actions.getPlanetsList();
	actions.getVehiclesList();
	
},[])
	return (
		<>
		<div className="container">
		<section>
			<h2 className="home_section-header">CHARACTERS</h2>
			<div className="home_display-horizontal">
			{store.charactersList.map((character) => <Character key={character.uid} {...character}/>)}
			</div>
		</section>
		<section>
			<h2 className="home_section-header">PLANETS</h2>
		<div className="home_display-horizontal">
		{store.planetsList.map((planet) => <Planet key={planet.uid} {...planet}/>)}
		</div>
		</section>
		<section>
			<h2 className="home_section-header">VEHICLES</h2>
			<div className="home_display-horizontal">
		{store.vehiclesList.map((vehicle) => <Vehicle key={vehicle.uid} {...vehicle}/>)}
			</div>
		</section>
		</div>
		
		
		</>
	)
	
;
}
