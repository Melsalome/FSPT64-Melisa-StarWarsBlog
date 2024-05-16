import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import Character from "../component/Character";
import PropTypes from "prop-types";
import '../../styles/characterDetailedView.css'

const CharacterDetailedView = () => {

  const  { characterID } = useParams();
  const { actions } = useContext(Context);
  const [characterDetailed, setCharacterDetailed] = useState({
    description: '',
    properties: {
      name: '',
      birth_year: '',
      gender: '',
      height: '',
      skin_color: '',
      eye_color: '',
    },
  });


  useEffect( () => {
    const fetchData = async () => {
      try {
        const characterDetailed = await actions.getCharacterDetailed(characterID);
        console.log("characterDetailed:", characterDetailed);
        setCharacterDetailed(characterDetailed);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };
fetchData();    
  },[])

  return <>
  <div className="character-detail">
  <div className="character-detail_main-section">
    <img src={'https://starwars-visualguide.com/assets/img/characters/' + (characterID)+'.jpg'} alt="character-detail-img" className="character-detail-img"/>
    <div className="character-detail_name-section">
    <h2>{characterDetailed.properties.name}</h2>
    <p>{characterDetailed.description}</p>
    </div>
    
  </div>
  <hr className="section-divider"></hr>
  <div className="character-detail_aspects">
    <div className="character-aspects">
        <h3>NAME</h3>
        <span>{characterDetailed.properties.name}</span>
    </div>
    <div className="character-aspects">
        <h3>BIRTH YEAR</h3>
     <span>{characterDetailed.properties.birth_year}</span>
    </div>
    <div className="character-aspects">
        <h3>GENDER</h3>
        <span>{characterDetailed.properties.gender}</span>
    </div>
    <div className="character-aspects">
        <h3>HEIGHT</h3>
        <span>{characterDetailed.properties.height}</span>
    </div>
    <div className="character-aspects">
        <h3>SKIN COLOR</h3>
        <span>{characterDetailed.properties.skin_color}</span>
    </div>
    <div className="character-aspects">
        <h3>EYE COLOR</h3>
        <span>{characterDetailed.properties.eye_color}</span>
    </div>
  
  </div>
  </div>
  </>;
};
export default CharacterDetailedView;

Character.propTypes = {
	match: PropTypes.object
};
