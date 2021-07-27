import React from 'react'
import s from './home.module.styl'
import c from 'classnames'
import Head from '../head'
import Body from '../body'
import Bottom from '../bottom'
// import globalEvent from '../../utils/global-event'

const Home = () => {

  return (
    <div className={c('wh100p fbv', s.body)}>
      <div>
        <Head />
      </div>

      <div className={c('fbh')}>
        <Body />
      </div>

      <div>
        <Bottom />
      </div>
    </div>
  )
}
export default Home
