import React, {Children} from 'react'
import c from 'classnames'
import s from './body.module.styl'
import r from '../../models'
import Icon from '../icon'

const {leftMenu} = r.body
const Body = () => {
  return (
    <div className={c(s.body, 'wh100p fbh')}>
      <div className={c(s.bodyLeft, 'h100p fbv')}>
        {
          leftMenu.iconBtnConfig.map(item => Children.toArray(
            <LeftIconButton iconName={item.iconName}/>
          ))
        }
      </div>
    </div>
  )
}
const LeftIconButton = ({isActive, iconName}) => {
  return (
    <div className={c('mt10 w100p fbh fbac fbjc h50')}>
      <Icon name={iconName} size={30}/>
    </div>
  )
}
export default Body
