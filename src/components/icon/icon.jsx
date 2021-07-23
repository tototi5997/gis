import React from 'react'
// import c from 'classnames'
// import s from './icon.module.styl'

const Icon = ({
  name, size = 16, fill = '#ffffff', className, opacity = 1,
}) => (
  <svg width={size} style={{opacity}} height={size} fill={fill} className={className}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

export default Icon
