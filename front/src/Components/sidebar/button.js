import React from 'react';

function FilterButton(props) {
  return (
    <button className='filterButton'>
      {props.buttonName}
    </button>
  )
}

export default FilterButton