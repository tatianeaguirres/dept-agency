import React, { useState } from 'react'
import './header.css'
import Menu from '../menu/menu'

const Header = ({ headerData }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [menuClassName, setMenuClassName] = useState('header__container')
  let [lastScrollPosition, setLastScrollPosition] = useState(0)

  const changeMenuBackground = scrollPosition => {
    scrollPosition < 300
      ? setMenuClassName('header__container')
      : setMenuClassName('header__container--scrolled')
  }
  window.addEventListener('scroll', () => {
    setLastScrollPosition(window.scrollY)
    changeMenuBackground(lastScrollPosition)
  })

  const openMenuByKeyboard = event => {
    if (event.keyCode === 13 || event.keyCode === 32) setOpenMenu(true)
  }

  const closeMenuByKeyboard = () => {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        setOpenMenu(false)
      }
    })
  }
  closeMenuByKeyboard()

  const keyboardActivated = event => {
    if (event.keyCode === 13 || event.keyCode === 32)
      alert('You activated me with the keyboard')
  }

  return (
    <header className='header'>
      <div className={menuClassName}>
        <a
          className='header__logo'
          href='/'
          title='Dept Agency Logo'
          role='banner'
          tabIndex={0}
          aria-label='Dept Agency Logo'
        >
          {headerData.logo}
        </a>
        <div
          className='header__menu'
          onClick={() => setOpenMenu(true)}
          tabIndex={0}
          onKeyDown={e => openMenuByKeyboard(e)}
          aria-label='Open menu'
        >
          <span className='screen-reader-only'>
            Clique here to open the menu
          </span>
          <p className='header__menu-text'>Menu</p>
          <div className='header__menu-icon'>
            <div className='header__menu-icon-line'></div>
            <div className='header__menu-icon-line'></div>
          </div>
        </div>
      </div>
      <section className='header__highlight'>
        <img
          className='header__mobile-image'
          src={headerData.mobile}
          alt={headerData.alt}
        />
        <img
          className='header__desktop-image'
          src={headerData.desktop}
          alt={headerData.alt}
        />
        <h1 className='header__title'>{headerData.title}</h1>
        <div className='header__button-container'>
          <span className='screen-reader-only'>
            Clique here to open more view cases
          </span>
          <button
            className='header__button'
            onClick={() => alert('More view cases')}
            tabIndex={0}
            onKeyDown={e => keyboardActivated(e)}
            aria-label='Open view case'
          >
            {headerData.button}
          </button>
        </div>
      </section>

      {openMenu && (
        <Menu headerData={headerData} onClose={() => setOpenMenu(false)} />
      )}
    </header>
  )
}

export default Header
