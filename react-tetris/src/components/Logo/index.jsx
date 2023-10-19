import React from 'react'
import { i18n, lan } from '../../unit/const'
import style from './index.module.scss'

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className='bg dragon'></div>
      <p dangerouslySetInnerHTML={{ __html: i18n.titleCenter[lan] }}></p>
    </div>
  )
}

export default Logo
