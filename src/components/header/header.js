import React, { useState } from 'react'
import './header.css'
import Menu from '../menu/menu'
import MobileHeaderImage from '../../assets/images/mobile-header-image.png'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__logo' href='/' title='Dept Agency'>
          Dept
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
          src={MobileHeaderImage}
          alt='Man on his back with a backpack in front of a white board'
        />
        <h2 className='header__title'>Work</h2>
        <div className='header__button-container'>
          <button className='header__button'>View case</button>
        </div>
      </section>

      {openMenu && <Menu onClose={() => setOpenMenu(false)} />}
    </header>
  )
}

export default Header
