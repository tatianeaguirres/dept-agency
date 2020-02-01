import React from 'react'
import './footer.css'
import arrowUp from '../../assets/images/long-arrow-alt-up-solid.svg'

const Footer = ({ footerData }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }

  return (
    <footer className='footer'>
      <div className='footer__line'>
        <div className='footer__menu'>
          <h3 className='footer__title'>{footerData.title}</h3>
          <ul className='footer__list'>
            {footerData.menu.map(item => (
              <li key={item.id} className='footer__menu-item'>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className='footer__list'>
            {footerData.socialMedias.map(item => (
              <li key={item.id} className='footer__social-item'>
                <a href={item.url}>
                  <img src={item.icon} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__info-section'>
          <div className='footer__company-info'>
            <p>Chamber of Commerce: {footerData.chamberOfCommerce}</p>
            <p>VAT: {footerData.vat}</p>
            <p>Terms and conditions</p>
          </div>
          <div className='footer__company-info'>
            <p>&copy; 2020 Dept Agency</p>
          </div>
        </div>
      </div>
      <div className='footer__top-column'>
        <button className='footer__top-button' onClick={() => scrollToTop()}>
          <img src={arrowUp} alt='arrow up icon' />
          TOP
        </button>
      </div>
    </footer>
  )
}

export default Footer
