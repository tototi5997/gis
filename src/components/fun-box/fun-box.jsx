import React, {useEffect, useRef} from 'react'
import c from 'classnames'
import s from './fun-box.module.styl'
import Icon from '../icon'
import anime from 'animejs'

const FunBox = () => {
  const boxRef = useRef(null)

  const animateMove = (ref, prop, pixels) => {
    return anime({
      targets: ref,
      [prop]: `${pixels}px`,
      easing: "easeOutCirc",
      duration: 2000,
    })
  }

  const getRandomNumber = num => {
    return Math.floor(Math.random() * (num + 1))
  }

  useEffect(() => {
    const eventList = ['mouseover', 'click']
    const button = boxRef.current
    
    eventList.forEach(item => {
      button.addEventListener(item, () => {
        const top = getRandomNumber(window.innerHeight - button.offsetHeight)
        const left = getRandomNumber(window.innerWidth - button.offsetWidth)

        animateMove(button, 'left', left)
        animateMove(button, 'top', top)
      })
    })
  }, [])

  return (
    <div className={c('fbh fbac fbjsb p10 w100 h40 pf usn', s.warp)} ref={boxRef}>
      <Icon name="fun-emoji" size={24} />
      <div>Click me</div>
    </div>
  )

}

export default FunBox
