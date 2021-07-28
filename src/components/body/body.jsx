import React from 'react'
import c from 'classnames'
import s from './body.module.styl'
import DragBox from '../drag-box'
import Button from '../button'
import Icon from '../icon'

const Body = () => {
  return (
    <div className={c(s.body, 'w100p')}>
      <DragBox>
        <div style={{height:200, width:200, border: '1px solid black'}}>
          <div className={c('fbh')}>
            <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" fill="black" /></div>
            <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" size={22} fill="red" /></div>
          </div>
          <div className={c('fbh')}>
            <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" size={40} fill="green" /></div>
            <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" size={50} fill="orange" /></div>
          </div>
        </div>
      </DragBox>

      <DragBox>
        <Button />
      </DragBox>
    </div>
  )
}
export default Body
