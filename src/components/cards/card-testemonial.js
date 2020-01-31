import React from 'react'
import './cards.css'

const CardTestemonial = ({ props }) => {
  return (
    <div className='cards__card-with-testemonials'>
      <p className='cards__card-content'>"{props.content}"</p>
      <p className='cards__card-author'>{props.author}</p>
    </div>
  )
}

export default CardTestemonial
