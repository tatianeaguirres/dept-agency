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

  window.addEventListener('scroll', function() {
    setLastScrollPosition(window.scrollY)
    changeMenuBackground(lastScrollPosition)
  })

  return (
    <header className='header'>
      <div className={menuClassName}>
        <a className='header__logo' href='/' title='Dept Agency'>
          {headerData.logo}
        </a>
        <div className='header__menu' onClick={() => setOpenMenu(true)}>
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
          <button className='header__button'>{headerData.button}</button>
        </div>
      </section>

      {openMenu && (
        <Menu headerData={headerData} onClose={() => setOpenMenu(false)} />
      )}
    </header>
  )
}

export default Header
