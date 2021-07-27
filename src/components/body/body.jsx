import React from 'react'
import c from 'classnames'
import s from './body.module.styl'
import DragBox from '../drag-box'

const Body = () => {
  return (
    <div className={c(s.body, 'w100p')}>
      <DragBox />
    </div>
  )
}
export default Body
