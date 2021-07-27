import React, {useEffect} from 'react'
import s from './home.module.styl'
import c from 'classnames'
import Head from '../head'
import Bottom from '../bottom'


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
    </div>
  )
}
export default Home
