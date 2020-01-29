import React from 'react'
import { render } from '@testing-library/react'
import Home from '../home'

describe('<Home/>', () => {
  it('renders content', () => {
    const { getByText } = render(<Home />)

    const content = getByText('Dept Agency')

    expect(content).toBeInTheDocument()
  })
})
