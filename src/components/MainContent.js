import React from 'react';
import HotelInfo from './HotelInfo';

const mapMainContent = ({ hotels }) => {
  return hotels.map((hotel, i) => {
    return <HotelInfo
      key={ i }
      name={ hotel.name }
      description={ hotel.description }
      url={ hotel.imageURL }
    />
  })
}

const MainContent = (props) => {
  return (
    <div className="hotels">
      { mapMainContent(props) }
    </div>
  )
}

export default MainContent;

