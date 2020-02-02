import React from 'react'
import './cards.css'
import Icon from '../../assets/images/caret-right-solid.svg'

const CardText = ({ props }) => {
  const keyboardActivated = event => {
    if (event.keyCode === 13 || event.keyCode === 32)
      alert('You activated me with the keyboard')
  }

  return (
    <div className='cards__card-with-text'>
      <p className='cards__card-name'>{props.name}</p>
      <h3 className='cards__card-title'>{props.title}</h3>
      <button
        className='cards_button'
        aria-label='Open the view of this case'
        onClick={() => alert('More view cases')}
        tabIndex={0}
        onKeyDown={e => keyboardActivated(e)}
      >
        <img src={Icon} alt='arrow icon' className='cards_button-icon' />
        View case
      </button>
    </div>
  )
}

export default CardText
