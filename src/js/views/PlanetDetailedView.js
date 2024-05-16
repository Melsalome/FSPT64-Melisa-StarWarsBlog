import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import Planet from "../component/Planet";
import "../../styles/planetDetailedView.css";

const PlanetDetailedView = () => {
  const { planetID } = useParams();
  const contentImage =
    "https://starwars-visualguide.com/assets/img/planets/" + planetID + ".jpg";
  const { actions } = useContext(Context);
  const [planetDetailed, setPlanetDetailed] = useState({
    description: "",
    properties: {
      name: "",
      climate: "",
      population: "",
      orbital_period: "",
      rotation_period: "",
      diameter: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const planetDetailed = await actions.getPlanetDetailed(planetID);
        console.log("planetDetailed:", planetDetailed);
        setPlanetDetailed(planetDetailed);
      } catch (error) {
        console.error("Error fetching planet details:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="planet-detail">
        <div className="planet-detail_main-section">
          {contentImage ===
          "https://starwars-visualguide.com/assets/img/planets/" +
            (1) +
            ".jpg" ? (
            <img
              src="https://static.wikia.nocookie.net/starfan/images/6/6c/Planetas.jpg/revision/latest?cb=20160109185859&path-prefix=es"
              className="tatooine"
            />
          ) : (
            <img src={contentImage} className="planet-detail-img" alt="..." />
          )}
          <div className="planet-detail_name-section">
            <h2>{planetDetailed.properties.name}</h2>
            <p>{planetDetailed.description}</p>
          </div>
        </div>
        <hr className="section-divider"></hr>
        <div className="planet-detail_aspects">
          <div className="planet-aspects">
            <h3>NAME</h3>
            <span>{planetDetailed.properties.name}</span>
          </div>
          <div className="planet-aspects">
            <h3>CLIMATE</h3>
            <span>{planetDetailed.properties.climate}</span>
          </div>
          <div className="planet-aspects">
            <h3>POPULATION</h3>
            <span>{planetDetailed.properties.population}</span>
          </div>
          <div className="planet-aspects">
            <h3>ORBITAL PERIOD</h3>
            <span>{planetDetailed.properties.orbital_period}</span>
          </div>
          <div className="planet-aspects">
            <h3>ROTATION PERIOD</h3>
            <span>{planetDetailed.properties.rotation_period}</span>
          </div>
          <div className="planet-aspects">
            <h3>DIAMETER</h3>
            <span>{planetDetailed.properties.diameter}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetDetailedView;
