import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from './redux-toolkit/characters.state';

export const CharactersContainer2 = () => {
  // Dispatch kommer fra hook i stedet for mapDispatchToProps
  const dispatch = useDispatch();
  // Henter data fra state med en selector-hook i stedet for mapStateToProps
  const characters = useSelector(state => state.characters.data);
  return (
    <>
      <h1>Star Wars characters</h1>
      <button type="button" onClick={async () => {
        console.log('BEFORE DISPATCH');
        // Merk hvordan dispatch sendes inn, trenger ikke thunk middleware
        const result = await dispatch(getCharacters());
        console.log('AFTER DISPATCH', result);
      }}>
        Get characters
      </button>
      <ul>
        {
          characters.map(character => <li key={character.uid}>{character.name}</li>)
        }
      </ul>
    </>
  )
};

// Ikke noe bruke av connect(), selv om vi kunne ha gjort det