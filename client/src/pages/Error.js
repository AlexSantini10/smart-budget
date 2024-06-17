import React from 'react'

import {Link} from 'react-router-dom';
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
      <div>
        <img src={img} alt='not found' />
        <h3>Oh! Page not found</h3>
        <p>We can't find the page you are looking for</p>
        <Link to='/'>Back Home</Link>
      </div>
  )
}

export default Error