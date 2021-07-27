import React, {useEffect, useState} from 'react'
import c from 'classnames'
import s from './drag-box.module.styl'
import Icon from '../icon'

const DragBox = () => {
  // 是否拖动
  let [isDrag, setDrag] = useState(false)
  // 起始量
  const [orginX, setOx] = useState(0)
  const [orignY, setOy] = useState(0)
  // 偏移量
  let [offsetX, setX] = useState(0) 
  let [offsetY, setY] = useState(0)

  useEffect(() => {
    
  })

  const dragFun = () => {
    window.onmousemove = e => {
      if (e && isDrag) {
        const x = e.clientX - orginX
        const y = e.clientY - orignY

        setX(e.clientX)
        setY(e.clientY)
      }
    }
  }
  const handleDown = value => {
    setDrag(isDrag = true)
    isDrag && console.log('点击了鼠标')
    // console.log(isDrag)
    setOx(value.clientX)
    setOy(value.clientY)
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
    <div className={c('pa', s.warp)} style={{top: offsetY, left: offsetX}}>

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
