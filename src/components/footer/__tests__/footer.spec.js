import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../footer'

const footerDataMock = {
  id: 1,
  title: 'Dept',
  chamberOfCommerce: '12345678',
  vat: 'NL 1234567890',
  socialMedias: [
    {
      id: 1,
      name: 'social 1',
      icon: 'social 1',
      alt: 'social 1 icon',
      url: 'https://www.social1.com/'
    }
  ],
  menu: [
    {
      id: 1,
      name: 'Item 1',
      url: '/'
    },
    {
      id: 2,
      name: 'Item 2',
      url: '/'
    }
  ]
}

describe('<Footer/>', () => {
  it('renders content', () => {
    const { getByText, getByAltText } = render(
      <Footer footerData={footerDataMock} />
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
    expect(getByAltText('social 1 icon')).toBeInTheDocument()
    expect(getByText('Chamber of Commerce: 12345678')).toBeInTheDocument()
    expect(getByText('VAT: NL 1234567890')).toBeInTheDocument()
    expect(getByText('Terms and conditions')).toBeInTheDocument()
    expect(getByText('© 2020 Dept Agency')).toBeInTheDocument()
  })
})
