import React from 'react'
import s from './home.module.styl'
import c from 'classnames'
import Head from '../head'
import Body from '../body'
import Bottom from '../bottom'
// import globalEvent from '../../utils/global-event'

const Home = () => {

  return (
    <div className={c('wh100p fbv pr', s.body)}>
      <div>
        <Head />
      </div>

      <div className={c('fbh wh100p')}>
        <Body />
      </div>

      <div className={c(s.bottom)}>
        <Bottom />
      </div>
    </div>
  )
}
export default Home
