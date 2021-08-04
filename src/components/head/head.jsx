import React, {useEffect} from 'react'
import c from 'classnames'
import r from '../../models'
import {observer} from 'mobx-react-lite'
import UiButton from '../button'

const {head} = r
const Head = () => {

  const btnConfig = [
    {label: 'ADD', key: 'add'},
    {label: 'SUBSTRACT', key: 'substrace'},
    {label: 'CLEAR', key: 'clear'},
  ]
  const btnStyl = {
    width: 120,
    height: 20,
    border: '1px solid black',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: 12,
    color: 'black',
  }

  return (
    <div className={c('w100p')}>

      <div className={c('ml10 mt10')}>{head.count}</div>
      <div className={c('ml10')}>
        <UiButton 
          btnConfig={btnConfig}
          btnStyle={btnStyl}
          handleClick={key => {
            head.handleClick(key)
          }}
        />
      </div>
      
    
    </div>
  ) 
}

export default observer(Head)
