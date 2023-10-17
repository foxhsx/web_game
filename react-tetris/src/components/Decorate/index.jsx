import React from 'react'
import style from './index.module.scss';
import { i18n, lan } from '../../unit/const'
import Block from '../Block';
import Clear from '../Clear';

const Decorate = () => {
  return (
    <div className={style.decorate}>
      <div className="topBorder">
        <span className="l mr" style={{ width: 40 }} />
        <span className="l mr" />
        <span className="l mr" />
        <span className="l mr" />
        <span className="l mr" />
        <span className="r ml" style={{ width: 40 }} />
        <span className="r ml" />
        <span className="r ml" />
        <span className="r ml" />
        <span className="r ml" />
      </div>
      <h1>{i18n.title[lan]}</h1>
      <div className="view">
        <div className='lightning'>
          <Block solid />
          <Clear />
          <Block solid />
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <p></p>
        </div>
        <div className="mountain-left">
          <em></em>
          <Block solid />
          <Clear />
          <Block solid />
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <p></p>
        </div>
        <div className="square">
          <Block solid />
          <Block solid />
          <Block solid />
          <Block solid />
          <p></p>
        </div>
        <div className="mountain-right">
          <Block solid />
          <Clear />
          <Block solid />
          <Block solid />
          <Clear />
          <Block solid />
          <p></p>
        </div>
        <div className="crutch-right">
          <Block solid />
          <Block solid />
          <Clear />
          <Block solid />
          <Clear />
          <Block solid />
          <p></p>
        </div>
        <div className="line">
          <em></em>
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
        </div>
      </div>
      <div className="view l">
        <div className='lightning'>
          <em></em>
          <Block solid />
          <Clear />
          <Block solid />
          <Block solid />
          <Clear />
          <Block solid />
          <em></em>
          <p></p>
        </div>
        <div className="mountain-right">
          <Block solid />
          <Clear />
          <Block solid />
          <Block solid />
          <Clear />
          <Block solid />
          <p></p>
        </div>
        <div className="square">
          <Block solid />
          <Block solid />
          <Block solid />
          <Block solid />
          <p></p>
        </div>
        <div className="mountain-left">
          <em></em>
          <Block solid />
          <Clear />
          <Block solid />
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <p></p>
        </div>
        <div className="crutch-left">
          <Block solid />
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <Clear />
          <em></em>
          <Block solid />
          <p></p>
        </div>
        <div className="line">
          <Block solid />
          <em></em>
          <Clear />
          <Block solid />
          <em></em>
          <Clear />
          <Block solid />
          <em></em>
          <Clear />
          <Block solid />
          <em></em>
        </div>
      </div>
    </div>
  )
};

export default Decorate;
