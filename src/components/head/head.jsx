import React, {useEffect} from 'react'
// import s from './head.module.styl'
import c from 'classnames'
import UiNumberCounter from '../ui-number-counter/ui-number-counter'
import Icon from '../icon'

const Head = () => {
    useEffect(() => {
        console.log('Head is Ready!')
    })
    return (
        <div>
            顶部菜单
            <UiNumberCounter number={121} />
            <UiNumberCounter number={32564} />
            <UiNumberCounter number={54844} />
            <UiNumberCounter number={13} />
            <UiNumberCounter number={999999999} />

            <div style={{height:200, width:200, border: '1px solid black'}} className={c('mb80 ml80')}>
                <div className={c('fbh')}>
                    <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" fill="black" /></div>
                    <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" size={22} fill="red" /></div>
                </div>
                <div className={c('fbh')}>
                    <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" size={40} fill="green" /></div>
                    <div style={{flex:1, height: 100, border: '1px solid black'}} className={c('fbh fbjc fbac')}><Icon name="user" size={50} fill="orange" /></div>
                </div>
            </div>
        </div>
    ) 
}
export default Head
