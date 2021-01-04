import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({ history }) => {
  const { heroId } = useParams();
  // const hero = getHeroesById(heroId);
  const hero = useMemo(() => getHeroesById(heroId), [heroId])
  if (!hero) return <Redirect to="/" />;

  const { 
    superhero,
    publisher,
    alter_ego,
    first_appareance,
    characters } = hero;

  const handleReturn = () => {
    history.goBack();
    // history.push(`/${publisher}`);
    // history.replace(`/${publisher}`);
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-lg-4">
        <img 
          src={ `${process.env.PUBLIC_URL}/assets/heroes/${heroId}.jpg` }
          alt={superhero}
          className="img-thumbnail" />
      </div>
      <div className="col-lg-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> { alter_ego } </li>
          <li className="list-group-item"><b>Publisher: </b> { publisher } </li>
          <li className="list-group-item"><b>First Appearance: </b> { first_appareance } </li>
        </ul>
        <h5>Characters</h5>
        <p> { characters } </p>
        <button 
          onClick={handleReturn}
          className="btn btn-outline-info">
          Return
        </button>

      </div>
    </div>
  )
}
