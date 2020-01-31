import React from 'react'
import './cards.css'

const CardText = ({ props }) => {
  return (
    <div className='cards'>
      <div className='cards__card-with-text'>
        <p className='cards__card-name'>{props.name}</p>
        <h3 className='cards__card-title'>{props.title}</h3>
      </div>
    </div>
  )
}

export default CardText
