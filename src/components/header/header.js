import React, { useState } from 'react'
import './header.css'
import Menu from '../menu/menu'

const Header = ({ headerData }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='header'>
      <div className='header__container'>
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
