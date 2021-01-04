import React, { useMemo } from 'react';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';



export const SearchScreen = ({ history }) => {
  console.log("me cree de nuevo");
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );

  const formValue = {
    search: q
  }
  
  const [ { search }, handleInputChange, reset ] = useForm(formValue)
  
  // const heroesFiltered = getHeroByName( q );
  const heroesFiltered = useMemo(() => getHeroByName( q ), [q])

  const handleSearch = (e) => { 
    e.preventDefault();
    history.push(`?q=${ search }`)
  }

  return (
    <div className="row">
      <div className="col-5">
        <h4>Search Form</h4>
        <hr/>
        <form onSubmit={ handleSearch }>
          <input 
            type="text"
            name="search"
            placeholder="Find your hero"
            className="form-control"
            autoComplete="off"
            value={ search }
            onChange={handleInputChange}
            />
          <button
            type="submit"
            className="btn mt-1 btn-block btn-outline-primary">
              Search...
          </button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr/>

          {
            ( q !== '' &&  heroesFiltered.length === 0 ) 
              && 
                <div className="alert alert-danger">
                  There is no a hero with "{ q }"
                </div>
          }
          {
            heroesFiltered.map( (hero) => (
              <HeroCard 
                key={ hero.id }
                {...hero}   
              />
            ))
          }
      </div>
    </div>
  )
}
