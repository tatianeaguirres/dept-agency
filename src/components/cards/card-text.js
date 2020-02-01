import React from 'react'
import './cards.css'
import Icon from '../../assets/images/caret-right-solid.svg'

const CardText = ({ props }) => {
  return (
    <div className='cards__card-with-text'>
      <p className='cards__card-name'>{props.name}</p>
      <h3 className='cards__card-title'>{props.title}</h3>
      <button className='cards_button'>
        <img src={Icon} alt='arrow icon' className='cards_button-icon' />
        View case
      </button>
    </div>
  )
}

export default CardText
