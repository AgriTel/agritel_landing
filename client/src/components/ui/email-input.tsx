import React from 'react'
import Button from './button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EmailInput = () => {
  return (
    <div className=''>
        <input type='email' />
        <Button 
        variant='secondary'
        text='Join Now'
        icon={faArrowRight}
        />
    </div>
  )
}

export default EmailInput;