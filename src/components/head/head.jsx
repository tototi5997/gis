import React, {useEffect} from 'react'
// import s from './head.module.styl'
import UiNumberCounter from '../ui-number-counter/ui-number-counter'

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
        </div>
    ) 
}
export default Head
