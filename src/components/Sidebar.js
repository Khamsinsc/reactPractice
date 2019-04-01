import React from 'react';
import Ratings from './Ratings';
import PropertyTypes from './PropertyTypes';

const Sidebar = ({ filters }) => {
  return (
    <div className='sidebar'>
      <Ratings ratings={ filters.Starrating } />
      <PropertyTypes types={ filters.Propertytype } />
    </div>
  )
}

export default Sidebar;

