import React from 'react'
import { render } from '@testing-library/react'
import Header from '../header'

export const headerDataMock = {
  id: 1,
  title: 'Work',
  logo: 'Dept',
  button: 'View case',
  desktop: 'desktopImage',
  mobile: 'mobileImage',
  alt: 'Man on his back with a backpack in front of a white board'
}

describe('<Header/>', () => {
  it('renders content', () => {
    const { getByText, getByAltText } = render(
      <Header headerData={headerDataMock} />
    )

    expect(getByText('Dept')).toBeInTheDocument()
    expect(getByText('Menu')).toBeInTheDocument()
    expect(getByText('Work')).toBeInTheDocument()
    expect(getByText('View case')).toBeInTheDocument()
    expect(
      getByAltText('Man on his back with a backpack in front of a white board')
    ).toBeInTheDocument()
  })
})
