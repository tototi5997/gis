import React, {Children} from 'react'
import c from 'classnames'
import s from './button.module.styl'
import Icon from '../icon'
// import inArray from '../../utils/in-array'

// config 
// 文本信息，key，是否启用，icon支持
const btnCon = [
  {label: '确认', key: 'confirm', iconName: 'user'},
  {label: '取消', key: 'cancel'},
]
// 按钮样式文件示例
const btnStyl = {
  width: 150,
  height: 40,
  border: '1px solid red',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderRadius: 3,
  fontSize: 14,
  color: 'black',
}
// 禁止列表
const disable = ['cancel']

const Button = ({btnConfig = btnCon, offset = 10, btnStyle = btnStyl, disableList = disable, handleClick = () => {}}) => {
  return (
    <div className={c('fbh usn')}>
      {
        btnConfig.map((item, index) => 
          Children.toArray(
            <div 
              className={c(s.button, 'fbh fbac fbjc hand', {
                [s.disable]: disableList.findIndex(i => item.key === i) !== -1,
              })} 
              style={{
                marginRight: index !== btnConfig.length - 1 && offset,
                ...btnStyle,
              }}
              onClick={() => { handleClick() }}
            >
              {
                item.iconName && <div className={c('fbh fbac fbjc mr8')}><Icon fill={btnStyle?.color} name={item.iconName}/></div>
              }
              <div>
                {item.label}
              </div>
            </div>
          )
        )
      }
    </div>
  )
}
export default Button
