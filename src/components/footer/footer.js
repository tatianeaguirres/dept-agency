import React from 'react'
import './footer.css'

const Footer = ({ footerData }) => {
  return (
    <footer className='footer'>
      <div className='footer__menu'>
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
    </footer>
  )
}

export default Footer
