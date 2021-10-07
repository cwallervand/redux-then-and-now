import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from './redux-toolkit/characters.state';



export const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.data);
  return (
    <>
      <h1>Star Wars characters</h1>
      <button type="button" onClick={async () => {
        console.log('BEFORE DISPATCH');
        const result = await dispatch(getCharacters());
        console.log('AFTER DISPATCH', result);
      }}>
        Get characters
      </button>
      <ul>
        {
          characters.map(character => <li>{character.name}</li>)
        }
      </ul>
    </>
  )
};
