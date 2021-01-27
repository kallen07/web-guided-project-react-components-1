import React, { useState } from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Don't forget all tags need to close correctly
*/

/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/


// want to build a "counter" that we display on the screen
// counter will start at 0
// if the value of the counter is 0, display a message encouraging the user to increment it
// increment the counter 
// multiply the value of the counter by 5
// reset the counter to be 0
function App() {
  const [count, setCount] = useState(0);
  //  const [time, setTime] = useState(0);

  const incrementByOne = () => {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>React Counter!</h1>
      <h2>Count: {count}</h2>
      {/* ternary statement */}
      {count === 0 ? <h3>Increment me!</h3> : <h3>Good job!</h3> }
      <button onClick={incrementByOne}>Increment by 1</button>
      <button onClick={() => setCount(count * 5)}>multiply by 5</button>
      <button onClick = {() => setCount(0)}>Reset</button>
    </div>
  )
}

// {count === 0 ? <h3>Increment me!</h3> : <h3>Good job!</h3> }
// is the same as 
// if (count === 0) {
//   return <h3>Increment me!</h3>
// } else {
//   return <h3>Good job!</h3>
// }

render(
  <App />,
  document.querySelector('#root')
)


// function app() {
//   const cohort = "PT25";
//   const div = document.createElement('div');
//   const h1 = document.createElement('h1');
//   div.classList.add('container');
//   h1.textContent = `Welcome to React, Web ${cohort}`;
//   div.appendChild(h1);
//   return div;
// }

//console.log(app());