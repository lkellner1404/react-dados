import React from 'react'
import Die from '../Die/Die'
import './style.css'

const DiceRoll = () => {
  return (
    <div className='dice-roll'>
      <Die face='one' />
      <Die face='two' />
      <Die face='three' />
      <Die face='four' />
      <Die face='five' />
      <Die face='six' />
    </div>
  )
}

export default DiceRoll