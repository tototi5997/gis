import MRoot from "./root"
import globalEvent from '../utils/global-event'

// 初始化根节点
const root = MRoot.create({}, {
  globalEvent,
  // some value
})

window.root = root
export default root