import React from 'react'
import logoImg from '../static/img/icon.png'

const Logo = () => {
  return (
    <div>
        <img src={logoImg} alt="Logo" style={{height:'60px', width:'60px'}} />
    </div>
  )
}

export default Logo