// Import Component Export
import React from 'react';

function FavAnimals(props) {
  return (
    <ul>
      {props.animals.map((animal, index) => {
        return <div key={index}>{animal}</div>
      })}
    </ul>
  )
}

export default FavAnimals;
