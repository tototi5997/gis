import {types} from 'mobx-state-tree'
import {MLeftMenu} from './leftMenu'

export const MBody = types.model('MBody', {
  leftMenu: types.optional(MLeftMenu, {}),
})