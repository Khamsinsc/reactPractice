import React from 'react';

const HotelInfo = ({ name, description, url }) => {
  return (
    <div className="hotel">
      <h2>{ name }</h2>
      <div className="article">
        <img src={ url } alt='' />
        <span>{ description } <br />
          <button>Book Now!</button></span>
      </div>
    </div>
  )
}

export default HotelInfo;