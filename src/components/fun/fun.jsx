import React, {useEffect} from 'react'
import anime from 'animejs'
// import s from './fun.module.styl'
import './index.css'
import c from 'classnames'

const Fun = () => {

  const fitElementToParent = (el, padding) => {
    let timeout = null
    const resize = () => {
      if (timeout) clearTimeout(timeout)
      anime.set(el, {scale: 1})
      let pad = padding || 0
      let parentEl = el.parentNode
      let elOffsetWidth = el.offsetWidth - pad
      let parentOffsetWidth = parentEl.offsetWidth
      let ratio = parentOffsetWidth / elOffsetWidth
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10)
    }
    resize()
    window.addEventListener('resize', resize)
  }

  const easingsAnimation =() => {

    let easingVisualizerEl = document.querySelector('.easing-visualizer')
    let barsWrapperEl = easingVisualizerEl.querySelector('.bars-wrapper')
    let dotsWrapperEl = easingVisualizerEl.querySelector('.dots-wrapper')
    let barsFragment = document.createDocumentFragment()
    let dotsFragment = document.createDocumentFragment()
    let numberOfBars = 91
    let duration = 450
    let animation

    fitElementToParent(easingVisualizerEl, 0)

    for (var i = 0; i < numberOfBars; i++) {
      var barEl = document.createElement('div')
      var dotEl = document.createElement('div')
      barEl.classList.add('bar')
      dotEl.classList.add('dot')
      dotEl.classList.add('color-red')
      barsFragment.appendChild(barEl)
      dotsFragment.appendChild(dotEl)
    }

    barsWrapperEl.appendChild(barsFragment)
    dotsWrapperEl.appendChild(dotsFragment)

    const play = () => {

      var easings = []
      for (let ease in anime.penner) easings.push(ease)
      easings.push('steps('+anime.random(5, 20)+')')
      easings.push('steps('+anime.random(5, 20)+')')
      easings.push('cubicBezier(0.545, 0.475, 0.145, 1)')
      let ease = easings[anime.random(0, easings.length - 1)]

      animation = anime.timeline({
        duration: duration,
        easing: ease,
        complete: play,
      })
        .add({
          targets: '.easing-visualizer .bar',
          scaleY: anime.stagger([1, 44], {easing: ease, from: 'center', direction: 'reverse'}),
          delay: anime.stagger(7, {from: 'center'}),
        })
        .add({
          targets: '.easing-visualizer .dot',
          translateY: anime.stagger(['-160px', '160px'], {easing: ease, from: 'last'}),
          delay: anime.stagger(7, {from: 'center'}),
        }, 0)

    }

    play()
  }

  useEffect(() => {
    easingsAnimation()
  }, [])

  return (
    <div className={c('wh100p fbh fbjc fbac pa')}>
      <div className="animation-wrapper">
        <div className="feature-animation">
          <div className="easing-visualizer">
            <div className="wrapper bars-wrapper"></div>
            <div className="wrapper dots-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fun