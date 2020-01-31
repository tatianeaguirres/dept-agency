import React, { useState } from 'react'
import './form.css'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = event => {
    fetch(`/messages`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
      .then(() => alert('Thank you for your message!'))
      .catch(() => alert('There was an error, please try again'))
  }

  return (
    <section className='form'>
      <form onSubmit={submit}>
        <h2 className='form__title'>QUESTION? WE ARE HERE TO HELP!</h2>
        <div className='form__input-field'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor='name'>name</label>
        </div>
        <div className='form__input-field'>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor='email'>email</label>
        </div>
        <div className='form__input-field'>
          <textarea
            id='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows='4'
            maxLength='200'
          />
          <label htmlFor='message'>message</label>
        </div>
        <div className='form__submit'>
          <input type='submit' id='submit' value='Sen' />
        </div>
      </form>
    </section>
  )
}

export default Form
