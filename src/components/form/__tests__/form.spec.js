import React from 'react'
import { render } from '@testing-library/react'
import Form from '../form'

describe('<Form/>', () => {
  it('renders content', () => {
    const { getByText, getByLabelText, queryByText } = render(<Form />)

    expect(getByText('QUESTION? WE ARE HERE TO HELP!')).toBeInTheDocument()
    expect(getByLabelText('name')).toBeInTheDocument()
    expect(getByLabelText('email')).toBeInTheDocument()
    expect(getByLabelText('message')).toBeInTheDocument()
    expect(queryByText('Sen')).toBeTruthy()
  })
})
