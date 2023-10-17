import React from 'react';
import style from './index.module.scss'
import { transform } from '../../unit/const';
import Decorate from '../Decorate';

const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const size = () => {
  const ratio = clientHeight / clientWidth;
  let filling = 0;
  let scale;
  let css = {};
  if (ratio < 1.5) {
    scale = clientHeight / 960;
  } else {
    scale = clientWidth / 640;
    filling = (clientHeight - (960 * scale)) / scale / 3;
    css = {
      paddingTop: Math.floor(filling) + 42,
      paddingBottom: Math.floor(filling),
      marginTop: Math.floor(-480 - (filling * 1.5)),
    }
  }
  css[transform()] = `scale(${scale})`;
  return css;
}

const Containers = () => {
  return (
    <div className={style.app} style={size()}>
      <div className="rect">
        <Decorate />
      </div>
    </div>
  )
}

export default Containers

