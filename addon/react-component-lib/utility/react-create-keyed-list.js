import React from "react";

function reactCreateKeyedList(value) {
  /*
    takes an array or singleton and creates a keyed span list
    <span key="">value</li>
  */

  if (Array.isArray(value)) {
    const listItems = value.map( (value, index) => {
      return <span className='ember-paper-react-validation-helper-text-span' key={index}>{ value }</span>
      }
    );
    return <>{listItems}</>
  } else { //singleton value
    return <span className='ember-paper-react-validation-helper-text-span'>{ value }</span>;
  }
}

export { reactCreateKeyedList };
