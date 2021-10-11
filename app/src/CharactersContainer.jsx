import React from 'react';
import { connect } from 'react-redux'

import { getCharacters } from './redux/characters.state';

const CharactersCompnent = ({
  charactersState,
  dispatch
}) => {
  const characters = charactersState.data;
  return (
    <>
      <h1>Star Wars characters</h1>
      <button type="button" onClick={async () => {
        console.log('BEFORE DISPATCH');
        // Merk hvordan dispatch sendes inn
        const result = await getCharacters(dispatch);
        console.log('AFTER DISPATCH', result);

        // MÅ BRUKE THUNK MIDDLEWARE FOR Å GJØRE DET SLIK
        // const result = await dispatch(getCharacters());
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

const mapStateToProps = (state) => ({
  charactersState: state.characters
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

// Connect() lar oss få tilgang til state og dispach i en komponent hvor som helst i komponent-hierarkiet
export const CharactersContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersCompnent);
