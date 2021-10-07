import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from './redux-toolkit/characters.state';



export const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.data);
  console.log('characters', characters)
  return (
    <>
      <button type="button" onClick={() => {
        getCharacters(dispatch);
      }}>Get characters</button>
      <h1>Star Wars characters</h1>
      <ul>
        {
          characters.map(character => <li>{character.name}</li>)
        }
      </ul>
    </>
  )
};
