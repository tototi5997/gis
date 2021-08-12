import {types} from 'mobx-state-tree'
import {MHead} from './head'
import {MBody} from './body'

// 模型树根节点

const MRoot = types.model('MRoot', {
  // 测试状态
  state: types.optional(types.boolean, false),
  // 顶部
  head: types.optional(MHead, {}),
  // 主体
  body: types.optional(MBody, {}),
})
  .actions(self => {
    const afterCreate = () => {
      
    }
    return {
      afterCreate,
    }
  })

export default MRoot
