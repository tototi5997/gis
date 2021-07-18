import React, {useEffect} from 'react'
// import s from './head.module.styl'

const Head = () => {
    useEffect(() => {
        console.log('Head is Ready!')
    })
    return (
        <div>
            顶部菜单
        </div>
    ) 
}
export default Head
