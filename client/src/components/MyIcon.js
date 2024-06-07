import React from 'react'

const MyIcon = ({Img}) => {
  return (
        <img src={require(`../static/img/${Img}`)} alt={Img} style={{ height: '25px', width: '25px' }} />
  )
}

export default MyIcon