import React from 'react'
import s from './bottom.module.styl'
import c from 'classnames'
import globalEvent from '../../utils/global-event'

const Bottom = () => {

  // 测试点击事件
  const handleClick = () => {
    // dosomething
    // 广播
    globalEvent.fire('MBottom.Test', {data: 'bottom is ready !'})
  }
  return (
    <div>
      底部区域
      <div className={c('hand', s.button)} onClick={() => { handleClick() }}>EVENT按钮</div>
    </div>
  )
}
export default Bottom
