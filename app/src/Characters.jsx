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

const mapStateToProps = (state) => ({
  charactersState: state.characters
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersCompnent);
