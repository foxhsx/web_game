import React from 'react';
import style from './index.module.scss'
import { transform } from '../../unit/const';
import Decorate from '../Decorate';
import Matrix from '../Matrix';
import Logo from '../Logo';

const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
/**
 * 计算 CSS 对象，用于调整元素的大小和位置
 * @returns 
 */
const size = () => {
  // 计算 clientHeight 和 clientWidth 之间的比例
  const ratio = clientHeight / clientWidth;
  // 计算填充高度
  let filling = 0;
  // 缩放比例
  let scale;
  // 存储最终的 css 样式
  let css = {};
  // 小于 1.5，说明页面会宽一些，缩放比例除以 960 或者 640，都是根据设计稿来确定的
  if (ratio < 1.5) {
    scale = clientHeight / 960;
  } else {
    scale = clientWidth / 640;
    // 如果页面窄一些的话，要计算填充的高度和调整的位置
    filling = (clientHeight - (960 * scale)) / scale / 3;
    css = {
      paddingTop: Math.floor(filling) + 42,
      paddingBottom: Math.floor(filling),
      marginTop: Math.floor(-480 - (filling * 1.5)),
    }
  }
  // 最后，函数根据计算得到的scale和filling，以及根据浏览器支持的transform属性，构建一个包含缩放和位置调整的CSS对象，并将其返回。
  css[transform()] = `scale(${scale})`;
  return css;
}

const Containers = () => {
  return (
    <div className={style.app} style={size()}>
      <div className="rect">
        <Decorate />
        <div className="screen">
          <div className="panel">
            <Matrix />
            <Logo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Containers

