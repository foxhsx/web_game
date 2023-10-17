import React from 'react'
import './index.module.scss'

const Block = ({ solid }) => {
  return <b className={solid ? 'c' : ''}></b>
}

export default Block
