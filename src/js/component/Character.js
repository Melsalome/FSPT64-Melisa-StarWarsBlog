import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ key, name }) => {
  return (
    <div className="card" style={{'minWidth': '18rem'}}>
    <img src="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div>
        <Link to={`/character_detailed/${key}`}>
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

export default Character
