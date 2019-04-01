import React from 'react';

const ratingTags = ({ ratings }) => {
  return ratings.map((rating, i) => {
    return (
      <React.Fragment key={ i }>
        <input type='checkbox' checked={ rating.checked } /> <span>{ rating.name }</span> <br />
      </React.Fragment>
    )
  });
}

const Ratings = (inputProps) => {
  return (
    <div className='ratings'>
      { ratingTags(inputProps) }
    </div>
  )
}

export default Ratings;