import React from 'react'
import c from 'classnames'
import s from './preview-case.module.styl'
import Icon from '../icon'

const PreviewCase = () => {
  return (
    <div>
      <div className={c(s.case, 'w200 h200')}>
        <div className={c('fbh')}>
          <div className={c('fb1 h100 fbh fbjc fbac', s.item)}><Icon name="user" fill="black" /></div>
          <div className={c('fb1 h100 fbh fbjc fbac', s.item)}><Icon name="user" size={22} fill="red" /></div>
        </div>
        <div className={c('fbh')}>
          <div className={c('fb1 h100 fbh fbjc fbac', s.item)}><Icon name="user" size={40} fill="green" /></div>
          <div className={c('fb1 h100 fbh fbjc fbac', s.item)}><Icon name="user" size={50} fill="orange" /></div>
        </div>
      </div>
    </div>
  )
}
export default PreviewCase
