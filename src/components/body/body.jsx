import React from 'react'
import c from 'classnames'
import s from './body.module.styl'
import DragBox from '../drag-box'
import Button from '../button'
import Icon from '../icon'
import PreviewCase from '../preview-case/preview-case'
import FunBox from '../fun-box/fun-box'

const Body = () => {
  return (
    <div className={c(s.body, 'w100p')}>
      <DragBox>
        <div className={c('pa l100 t100')}>
          <PreviewCase />
        </div>
      </DragBox>

      <DragBox>
        <div className={c('pa l100 t400')}>
          <Button />
        </div>
      </DragBox>

      <FunBox />
    </div>
  )
}
export default Body
