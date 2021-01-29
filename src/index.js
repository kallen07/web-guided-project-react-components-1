import React, { useState} from 'react'
import { render } from 'react-dom'

import DisplayName, { displayName } from './components/Person.js'
import { DisplayFruit as blah } from './components/importExamples/Fruit'
import FavAnimals from "./components/FavAnimals"
import personData from "./data";
// const props = {
//   personName: "sharon",
//   dogName: "toby"
// }
// console.log(displayName(props))

function App() {

  const [person, setPerson] = useState(personData);

  return (
    <div className="container">
      <h1>Person information</h1>
      <DisplayName personName={person.name} dogName={person.dogName} />
      <FavAnimals animals={person.favAnimals}/>
    </div>
  )
}

render(
  <App />,
  document.querySelector('#root')
)