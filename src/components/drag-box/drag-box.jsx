import React, {useEffect, useState} from 'react'
import c from 'classnames'
import s from './drag-box.module.styl'
import Icon from '../icon'

const DragBox = ({children}) => {
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
        setX(cx + x)
        setY(cy + y)
      }
    }
  }
  const handleDown = value => {
    setDrag(isDrag = true)
    // 保存每次鼠标按下的起始坐标
    setOx(orginX = value.clientX)
    setOy(orignY = value.clientY)
    document.addEventListener('mousemove', dragFun())
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', dragFun())
      setDrag(isDrag = false)
    })
  }

  const handleUp = () => {
    document.removeEventListener('mousemove', dragFun())
    setDrag(isDrag = false)
  }

  return (
    <div className={c('pa')} style={{top: cy, left: cx}}>

      <div onMouseDown={e => {handleDown(e)}} onMouseUp={() => {handleUp()}}>
        {children}
      </div>
    </div>
  )
}
export default DragBox
