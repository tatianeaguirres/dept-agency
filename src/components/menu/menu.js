import React from 'react'
import './menu.css'
import useLockBodyScroll from '../../hooks/use-lock-body-scroll'

const Menu = ({ headerData, onClose }) => {
  useLockBodyScroll() // Call hook to lock body scroll

  return (
    <nav className='menu'>
      <div className='menu__container'>
        <a className='menu__logo' href='/' title='Dept Agency'>
          {headerData.logo}
        </a>
        <div className='menu__menu-icon'>
          <span className='menu__close-button' onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
      <div className='menu__content'>
        <ul className='menu__list'>
          {headerData.menuItems.map(item => (
            <li className='menu__items' key={item.id}>
              <span className='menu__selected-icon' />
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
