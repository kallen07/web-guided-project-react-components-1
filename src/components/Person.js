import React from 'react';

export function displayName(props) {
  const { personName, dogName } = props;
  return `Hello my name is ${personName} and my dog\'s name is ${dogName}`;
}

function DisplayName(props) {
  const { personName, dogName } = props;
  return (<div>
    Hello my name is {personName} and my dog's name is {dogName}
  </div>);
}
export default DisplayName;
