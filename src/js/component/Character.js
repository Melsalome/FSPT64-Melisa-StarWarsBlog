import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.css'
import { Context } from '../store/appContext';


const Character = ({ name, uid}) => {
  const {actions} = useContext(Context)
  return (
    <div className="card" style={{'minWidth': '18rem'}}>
    <img src={'https://starwars-visualguide.com/assets/img/characters/' + (uid)+'.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <div className='card-buttons'>
        <Link to={`/character_detailed/${uid}`}>
        <button>Learn More!</button>
        </Link>
      <button type="button" className="btn btn-danger">
      <span className="material-symbols-outlined" onClick={() => actions.addFavorites(name)}>favorite</span>
      </button>
      </div>
    
      
    </div>
  </div>
  )
}

export default Character
