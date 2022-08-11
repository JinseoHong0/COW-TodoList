import React from 'react';
import FilterButton from './button';


function SideBar() {
  return(
    <div className='sideFilterBar'>
      <FilterButton buttonName="전체 보기"/>
      <FilterButton buttonName="완료된 일"/>
      <FilterButton buttonName="해야할 일"/>
    </div>
  )
}

export default SideBar