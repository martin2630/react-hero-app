import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroeList = ({ publisher }) => {

  // const heroes = getHeroesByPublisher(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  console.log("me cree de nuevo");
  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {
        heroes.map( (hero) => (
          <HeroCard 
            key={hero.id}
            { ...hero } 
          />
        ))
      }
    </div>
  )
}
