import React from 'react'
import './menu.css'
import useLockBodyScroll from '../../hooks/use-lock-body-scroll'
import Icon from '../../assets/images/caret-right-solid.svg'

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
              <a href={item.url}>
                <img
                  src={Icon}
                  alt='arrow icon'
                  className='menu__triangle-icon'
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='menu__landen'>
        <ul className='menu__landen-items'>
          <li>landen</li>
          {headerData.landenItems.map(item => (
            <li key={item.id}>
              <a href={item.url}>
                <img
                  src={Icon}
                  alt='arrow icon'
                  className='menu__triangle-icon'
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='menu__social'>
        <ul className='menu__social-items'>
          {headerData.landenItems.map(item => (
            <li key={item.id}>
              <a href={item.url}>
                <img
                  src={Icon}
                  alt='arrow icon'
                  className='menu__triangle-icon'
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
