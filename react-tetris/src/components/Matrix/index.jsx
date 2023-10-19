import React, { useState } from 'react'
import style from './index.module.scss'

const Matrix = () => {
  const [clearLines, setClearLines] = useState(false);
  const [animateColor, setAnimateColor] = useState(2)
  const [isOver, setIsOver] = useState(false)
  const [overState, setOverState] = useState(null)

  return (
    <div className={style.matrix}>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}

export default Matrix
