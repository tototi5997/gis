import React, {useEffect, useState} from 'react'
import c from 'classnames'
import s from './drag-box.module.styl'
import Icon from '../icon'

const DragBox = () => {
  // 是否拖动
  let [isDrag, setDrag] = useState(false)
  // 起始量
  let [orginX, setOx] = useState(0)
  let [orignY, setOy] = useState(0)
  // 盒子当前的位置
  let [cx, setX] = useState(0) 
  let [cy, setY] = useState(0)

  useEffect(() => {
    
  })

  const dragFun = () => {
    window.onmousemove = e => {
      if (e && isDrag) {
        // 移动中计算当前位置鼠标与起始位置的偏移量
        const x = e.clientX - orginX
        const y = e.clientY - orignY
        console.log('鼠标偏移', [x, y])
        setX(cx + x)
        setY(cy + y)
      }
    }
  }
  const handleDown = value => {
    setDrag(isDrag = true)
    isDrag && console.log('点击了鼠标')
    // 保存每次鼠标按下的起始坐标
    setOx(orginX = value.clientX)
    setOy(orignY = value.clientY)
    document.addEventListener('mousemove', dragFun())
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', dragFun())
      setDrag(isDrag = false)
      !isDrag && console.log('松开了鼠标')
    })
  }

  const handleUp = () => {
    document.removeEventListener('mousemove', dragFun())
    setDrag(isDrag = false)
    !isDrag && console.log('松开了鼠标')
  }

  return (
    <div className={c('pa', s.warp)} style={{top: cy, left: cx}}>

      <div className={c(s.drag)} onMouseDown={e => {handleDown(e)}} onMouseUp={() => {handleUp()}}>拖动区域</div>

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

    </div>
  )
}
export default DragBox
