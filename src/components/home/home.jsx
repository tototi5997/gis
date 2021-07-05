import React from 'react'
import s from './home.module.styl'
import c from 'classnames'

const Home = () => {
    return (
    <div className={c('wh100p fbv', s.body)}>
        <div>顶部菜单</div>
        <div className={c('fbh')}>
            <div>左侧菜单</div>
            <div>右侧菜单</div>
        </div>
        <div>顶部菜单</div>
    </div>
    )
}
export default Home
