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
        const result = await getCharacters(dispatch);
        console.log('AFTER DISPATCH', result);

        // console.log('BEFORE DISPATCH');
        // const result = await dispatch(getCharacters());
        // console.log('AFTER DISPATCH', result);
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

const mapStateToProps = (state) => ({
  charactersState: state.characters
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersCompnent);
