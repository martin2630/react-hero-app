import React, { useContext } from 'react'
import { HeroeList } from '../heroes/HeroeList';
import { AuthContext } from '../../auth/AuthContext';

export const MarvelScreen = ({ logged }) => {
  const { user } = useContext( AuthContext );
  
  const publisher = "Marvel Comics";
  return (
    <>
      <h1>MarvelScreen</h1>
      <hr/>
      <HeroeList publisher={ publisher } />
    </>
  )
}
