import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
// import c from 'classnames'
// import s from './ui-number-counter.module.styl'

const UiNumberCounter = ({number = 100}) => {
  const numberRef = useRef(null)

  useEffect(() => {
    anime({
      targets: numberRef.current,
      duration: 3000,
      innerHTML: [0, number],
      easing: 'easeInOutExpo',
      round: 1, // Will round the animated value to 1 decimal
    })
  }, [number])
  return (
    <div ref={numberRef} style={{width: 100, height: 50}} />
  )
}
export default UiNumberCounter
