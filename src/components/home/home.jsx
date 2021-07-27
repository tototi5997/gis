import React from 'react'
import s from './home.module.styl'
import c from 'classnames'
import Head from '../head'
import Body from '../body'
import Bottom from '../bottom'
<<<<<<< HEAD


const Home = () => {
  return (
    <div className={c('wh100p fbv', s.body)}>
			<div>
				<Head />
			</div>

			<div className={c('fbh')}>
				<div>左侧菜单</div>
				<div>右侧菜单</div>
			</div>

			<div>
				<Bottom />
			</div>
=======
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
>>>>>>> c7d71a7163a4256237e967c435193e56e0875394
    </div>
  )
}
export default Home
