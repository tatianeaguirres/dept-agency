import React from 'react'
import './cards.css'

const CardImage = ({ props }) => {
  return (
    <div className='cards__card-with-image'>
      <img className='cards__card-image' src={props.image} alt={props.title} />
      <p className='cards__card-name'>{props.name}</p>
      <h3 className='cards__card-title'>{props.title}</h3>
    </div>
  )
}

export default CardImage
