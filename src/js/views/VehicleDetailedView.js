import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import '../../styles/VehicleDetailedView.css'


const VehicleDetailedView = () => {
  const  { vehicleID } = useParams();
  const { actions } = useContext(Context);
  const [vehicleDetailed, setVehicleDetailed] = useState({
    description: '',
    properties: {
      name: '',
      cargo_capacity: '',
      manufacturer: '',
      model: '',
      vehicle_class: '',
      consumables: '',
    },
  });


  useEffect( () => {
    const fetchData = async () => {
      try {
        const vehicleDetailed = await actions.getVehicleDetailed(vehicleID);
        console.log("vehicleDetailed:", vehicleDetailed);
        setVehicleDetailed(vehicleDetailed);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
      }
    };
fetchData();    
  },[])

  return (
<div className="vehicle-detail">
  <div className="vehicle-detail_main-section">
    <img src={'https://starwars-visualguide.com/assets/img/vehicles/' + (vehicleID)+'.jpg'} alt="vehicle-detail-img" className="vehicle-detail-img"/>
    <div className="vehicle-detail_name-section">
    <h2>{vehicleDetailed.properties.name}</h2>
    <p>{vehicleDetailed.description}</p>
    </div>
    
  </div>
  <hr className="section-divider"></hr>
  <div className="vehicle-detail_aspects">
    <div className="vehicle-aspects">
        <h3>NAME</h3>
        <span>{vehicleDetailed.properties.name}</span>
    </div>
    <div className="vehicle-aspects">
        <h3>CARGO CAPACITY</h3>
     <span>{vehicleDetailed.properties.cargo_capacity}</span>
    </div>
    <div className="vehicle-aspects">
        <h3>MANUFACTURER</h3>
        <span>{vehicleDetailed.properties.manufacturer}</span>
    </div>
    <div className="vehicle-aspects">
        <h3>MODEL</h3>
        <span>{vehicleDetailed.properties.model}</span>
    </div>
    <div className="vehicle-aspects">
        <h3>VEHICLE CLASS</h3>
        <span>{vehicleDetailed.properties.vehicle_class}</span>
    </div>
    <div className="vehicle-aspects">
        <h3>CONSUMABLES</h3>
        <span>{vehicleDetailed.properties.consumables}</span>
    </div>
  
  </div>
  </div>
  )
 
};

export default VehicleDetailedView;