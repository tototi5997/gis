import React, {useEffect, useState} from 'react'
import c from 'classnames'
import s from './ui-time.module.styl'
import moment from 'moment'

const Timer = ({fontSize = 14}) =>{
  const [time, getTime] = useState('')
  useEffect(() =>{
    const timer = setInterval(() => {
      updateTime()
    }, 1000)
  }, [])

  // 更新时间的方法
  const updateTime = () => {
    getTime(moment().format('HH:mm:ss YYYY-MM-DD'))
  }
  return (
    <div className={c('fhb fbac fbjc', s.font)} style={{fontSize}}>
      {time} 
    </div>
  )
}
export default Timer
