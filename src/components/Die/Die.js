import React from 'react'

const Die = ({ face }) => {
  return (
    <i className={`fa-solid fa-dice-${face}`}></i>
  )
}

export default Die