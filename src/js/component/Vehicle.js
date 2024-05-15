import React from 'react';
import { Link } from 'react-router-dom';

const Vehicle = ({name, uid}) => {
  return (
    <div className="card" style={{'minWidth': '18rem'}}>
    <img src="https://lumiere-a.akamaihd.net/v1/images/Which-Star-Wars-Vehicle-is-Meant-For-You-AT-AT_e1161c77.jpeg?region=56%2C0%2C888%2C500" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div>
      <Link to={`/vehicle_detailed/${uid}`}>
        <a href="#" className="btn btn-primary">Learn More!</a>
        </Link>
      <button type="button" className="btn btn-danger">
      <span className="material-symbols-outlined">favorite</span>
      </button>
      </div>
    
      
    </div>
  </div>
  )
}

export default Vehicle
