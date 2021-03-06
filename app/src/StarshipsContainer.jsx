import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getStarships } from './redux-toolkit/starships.state';

export const StarshipsContainer = () => {
  const dispatch = useDispatch();
  const starships = useSelector(state => state.starships.data);
  return (
    <>
      <h1>Star Wars starships</h1>
      <button type="button" onClick={() => {
        dispatch(getStarships())
      }}>
        Get starships
      </button>
      <ul>
        {
          starships.map(starship => <li key={starship.uid}>{starship.name}</li>)
        }
      </ul>
    </>
  )
};
