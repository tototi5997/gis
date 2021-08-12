import {types} from 'mobx-state-tree'

export const MLeftMenu = types.model('MLeftMenu', {
  iconBtnConfig: types.optional(types.frozen(), [
    {label: '文档', iconName: 'document', key: 'document'},
    {label: '搜索', iconName: 'search', key: 'search'},
    {label: '分支', iconName: 'branch', key: 'branch'},
    {label: '插件', iconName: 'plugin', key: 'plugin'},
    {label: '调试', iconName: 'test', key: 'test'},
  ]),
  activeIBtn: types.optional(types.string, 'document'),
})