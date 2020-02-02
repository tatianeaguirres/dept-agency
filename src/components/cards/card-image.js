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

  const keyboardActivated = event => {
    if (event.keyCode === 13 || event.keyCode === 32)
      alert('You activated me with the keyboard')
  }

  return (
    <div className={highlightClassName}>
      <img className='cards__card-image' src={props.image} alt={props.alt} />
      <p className='cards__card-name'>{props.name}</p>
      <h2 className='cards__card-title'>{props.title}</h2>
      <button
        className='cards_button'
        aria-label='Open the view of this case'
        onClick={() => alert('More view cases')}
        tabIndex={0}
        onKeyDown={e => keyboardActivated(e)}
      >
        <span className='screen-reader-only'>
          Clique here to open this view case
        </span>
        <img src={Icon} alt='arrow icon' className='cards_button-icon' />
        View case
      </button>
    </div>
  )
}

export default CardImage
