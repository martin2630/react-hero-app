import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appareance,
  characters
}) => {
  return (
    <div className="card mb-3" style={ {maxWidth: 540} }>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={ `${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg` } className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{ superhero }</h5>
            <p className="card-text">{ alter_ego }</p>
            {
                (alter_ego !== characters) 
                && <p>{characters}</p>
            }

            {
              <p className="card-text">
                <span className="text-muted">{first_appareance}</span>
              </p>
            }

            <Link to={ `./hero/${id}` }>
              Más  
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
