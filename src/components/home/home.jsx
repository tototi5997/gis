import React, {useEffect} from 'react'
import s from './home.module.styl'
import c from 'classnames'
import Head from '../head'
import Bottom from '../bottom'
import globalEvent from '../../utils/global-event'

const Home = () => {
    useEffect(() => {
        globalEvent.on('MBottom.Test', ({data}) => {
            console.log('event data', data)
        })
    })

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
