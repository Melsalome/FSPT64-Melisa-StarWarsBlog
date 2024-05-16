import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Planet = ({name, uid}) => {
  const notFoundImg = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg";
  const contentImage ='https://starwars-visualguide.com/assets/img/planets/' + (uid)+'.jpg'
  const {actions} = useContext(Context)
  return (
    <div className="card" style={{'minWidth': '18rem'}}>
      {contentImage === 'https://starwars-visualguide.com/assets/img/planets/' + (1) +'.jpg' ? <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg" className='tatooine' /> : <img src={contentImage} className="card-img-top" alt="..."/> }

    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <div className='card-buttons'>
       <Link to={`/planet_detailed/${uid}`}>
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

export default Planet
