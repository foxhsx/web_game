import React, { useCallback, useEffect, useState } from 'react'
import { i18n, lan } from '../../unit/const'
import style from './index.module.scss'

const Logo = () => {
  const [blink, setBlink] = useState('')

  let count = 0;
  const eyes = useCallback((eyesState, delay) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    count += 1;
    setTimeout(() => {
      setBlink(eyesState)
      if (count < 8) {
        eyes(eyesState === 'eyes' ? '' : 'eyes', 150)
      }
    }, delay)
  }, [])

  useEffect(() => {
    eyes('eyes', 1500)
  }, [eyes])

  return (
    <div className={style.logo}>
      <div className={`bg dragon ${blink}`}></div>
      <p dangerouslySetInnerHTML={{ __html: i18n.titleCenter[lan] }}></p>
    </div>
  )
}

export default Logo
