import React from 'react';

const propertyTags = ({ types }) => {
  return types.map((pType, i) => {
    return (
      <React.Fragment key={ i }>
        <input type='checkbox' checked={ pType.checked } /> <span>{ pType.name }</span> <br />
      </React.Fragment>
    )
  });
}

const PropertyTypes = (inputProps) => {
  let tags = propertyTags(inputProps);
  console.log(tags)
  return (
    <div className='propertyTypes'>
      { tags }
    </div>
  )
}

export default PropertyTypes;