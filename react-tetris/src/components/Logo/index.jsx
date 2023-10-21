import React, { useCallback, useEffect, useState } from 'react'
import { i18n, lan } from '../../unit/const'
import style from './index.module.scss'

let count = 0;
let direction = 'r';
let position = '4';

const Logo = () => {
  const [className, setClassName] = useState('')

  const run = useCallback((name) => {
    count++
    setTimeout(() => {
      if (count < 49) {
        setClassName(name)
        // ! 动画有问题，刚刷新的时候就不行
        if ([19, 29, 39].includes(count)) {
          direction = direction === 'r' ? 'l' : 'r'
        }
        position = position === '4' ? '3' : '4'
        run(direction+position)
      } else {
        // setClassName(`${direction}1`)
        // count = 0
        // position = '4';
        // setTimeout(() => {
        //   eyes('eyes', 1500)
        // }, 4000)
      }
    }, 100)
  }, [])

  const eyes = useCallback((eyesState, delay) => {
    count++;
    setTimeout(() => {
      setClassName(eyesState)
      if (count < 8) {
        eyes(eyesState === 'eyes' ? '' : 'eyes', 150)
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
