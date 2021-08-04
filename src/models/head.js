import {types} from 'mobx-state-tree'

export const MHead = types.model('MHead', {
  // 标题名称
  title: types.optional(types.string, '标题栏的名称谢在这里'),
  // 测试数值
  count: types.optional(types.number, 0),
})
  .actions(self => {
    const afterCreate = () => {
      console.log('顶部标题初始化完毕')
    }
    const handleClick = btnKey => {
      btnKey === 'add' && self.count ++
      btnKey === 'substrace' && self.count --
      if (btnKey === 'clear') self.count = 0
    }
    return {
      afterCreate,
      handleClick,
    }
  })