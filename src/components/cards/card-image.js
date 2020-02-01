import React, { useState, useEffect } from 'react'
import './cards.css'
import Icon from '../../assets/images/caret-right-solid.svg'

const CardImage = ({ props, highlight }) => {
  const [highlightClassName, setHighlightClassName] = useState(
    'cards__card-with-image'
  )

  useEffect(() => {
    const changeCardWidth = isHighlight => {
      if (isHighlight)
        setHighlightClassName('cards__card-with-image--highlighted')
    }
    changeCardWidth(highlight)
  })

  return (
    <div className={highlightClassName}>
      <img className='cards__card-image' src={props.image} alt={props.title} />
      <p className='cards__card-name'>{props.name}</p>
      <h3 className='cards__card-title'>{props.title}</h3>
      <button className='cards_button'>
        <img src={Icon} alt='arrow icon' className='cards_button-icon' />
        View case
      </button>
    </div>
  )
}

export default CardImage
