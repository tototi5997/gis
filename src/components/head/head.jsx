import React, {useEffect} from 'react'
import c from 'classnames'
import r from '../../models'
import {observer} from 'mobx-react-lite'
import Icon from '../icon'
import Timer from '../ui-time/ui-time'
import s from './head.module.styl'

const {head} = r
const Head = () => {

  return (
    <div className={c('w100p')}>
      <div className={c('fbh ctw fbac', s.head)}>
        <div className={c('ml10')}>
          <Icon name="icon-tools" size={25}/>
        </div>
        <div className={c('ml10 bold')}>{head.owner}的测试空间</div>
        <div className={c('fbh fbjc fbac h100p mr10', s.headRight)}>
          <div className={c('mr10')}><Icon name="clock" size={25}/></div>
          <Timer />
        </div>
      </div>
    </div>
  )
}

export default observer(Head)
