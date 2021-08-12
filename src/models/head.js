import {types} from 'mobx-state-tree'

export const MHead = types.model('MHead', {
  // 空间onwer
  owner: types.optional(types.string, '青红'),
  // state,状态
  emojiState: types.optional(types.string, 'happy-emoji'),
})
  .actions(self => {
    const afterCreate = () => {

    }
    return {
      afterCreate,
    }
  })