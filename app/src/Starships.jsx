import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getStarships } from './redux-toolkit/starships.state';

export const Starships = () => {
  const dispatch = useDispatch();
  const starships = useSelector(state => state.starships.data);
  return (
    <>
      <button type="button" onClick={() => {
        dispatch(getStarships())
      }}>Get starships</button>
      <h1>Star Wars starships</h1>
      <ul>
        {
          starships.map(starship => <li>{starship.name}</li>)
        }
      </ul>
    </>
  )
};
