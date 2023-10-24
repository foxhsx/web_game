import React, { useCallback, useEffect, useState } from 'react'
import { i18n, lan } from '../../unit/const'
import style from './index.module.scss'

let count = 0;
let direction = 'r';
let position = '4';
let timer = null;
let directionTimer = null;

const Logo = () => {
  const [className, setClassName] = useState('')

  const run = useCallback((name) => {
    count++;
    clearTimeout(directionTimer)
    directionTimer = setTimeout(() => {
      if (count < 49) {
        setClassName(name)
        if ([19, 29, 39].includes(count)) {
          direction = direction === 'r' ? 'l' : 'r'
        }
        position = position === '4' ? '3' : '4'
        run(direction+position)
      } else {
        setClassName(`${direction}1`)
        count = 0
        position = '4';
        clearTimeout(timer)
        timer = setTimeout(() => {
          eyes('eyes', 1500)
        }, 4000)
      }
    }, 100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const eyes = useCallback((eyesState, delay) => {
    count++;
    clearTimeout(timer)
    timer = setTimeout(() => {
      setClassName(eyesState)
      if (count < 9) {
        const key = eyesState === 'eyes' ? '' : 'eyes';
        eyes(key, 150)
      } else {
        run(direction+position)
      }
    }, delay)
  }, [run])

  useEffect(() => {
    eyes('eyes', 1500)
  }, [eyes])

  return (
    <div className={style.logo}>
      <div className={`bg dragon ${className}`}></div>
      <p dangerouslySetInnerHTML={{ __html: i18n.titleCenter[lan] }}></p>
    </div>
  )
}

export default Logo
