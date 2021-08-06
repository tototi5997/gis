import {types} from 'mobx-state-tree'
import {MHead} from './head'

// 模型树根节点

const MRoot = types.model('MRoot', {
  // 测试状态
  state: types.optional(types.boolean, false),
  // 顶部
  head: types.optional(MHead, {}),
})
  .actions(self => {
    const afterCreate = () => {
      
    }
    return {
      afterCreate,
    }
  })

export default MRoot
