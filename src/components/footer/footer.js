import React from 'react'
import './footer.css'
import arrowUp from '../../assets/images/long-arrow-alt-up-solid.svg'

const Footer = ({ footerData }) => {
  let isSmoothScrollSupported =
    'scrollBehavior' in document.documentElement.style
  let scrollToTopOptions = {
    behavior: 'smooth',
    left: 0,
    top: 0
  }

  const scrollToTop = (isSmoothScrollSupported, scrollToTopOptions) => {
    if (isSmoothScrollSupported) {
      window.scroll(scrollToTopOptions)
    } else {
      window.scroll(scrollToTopOptions.left, scrollToTopOptions.top)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }

  return (
    <footer className='footer'>
      <div className='footer__line'>
        <nav className='footer__menu'>
          <h3 className='footer__title'>{footerData.title}</h3>
          <ul className='footer__list' role='navigation'>
            {footerData.menu.map(item => (
              <li key={item.id} className='footer__menu-item'>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className='footer__list' role='navigation'>
            {footerData.socialMedias.map(item => (
              <li key={item.id} className='footer__social-item'>
                <a href={item.url}>
                  <img src={item.icon} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='footer__info-section' role='contentinfo'>
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
        <button
          className='footer__top-button'
          tabIndex={0}
          aria-label='Scroll to top of page'
          onClick={() =>
            scrollToTop(isSmoothScrollSupported, scrollToTopOptions)
          }
        >
          <img src={arrowUp} alt='arrow up icon' />
          TOP
        </button>
      </div>
    </footer>
  )
}

export default Footer
