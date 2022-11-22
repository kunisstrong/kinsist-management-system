import { createStore } from 'vuex'
import { Itab } from './type';
interface State {
  tabList: Array<Itab>
}

export const store = createStore<State>({
  state: {
    // tab标签
    tabList: []
  },
  mutations: {
    // 点击菜单增加tab标签，重复的不添加
    addTab(state: State, tab: Itab) {
      const isSome = state.tabList.some(item => item.path === tab.path)
      if (!isSome) {
        state.tabList.push(tab)
      }
    }
  },
  getters: {
    // 通过getters获取tab标签更容易
    getAddTab(state: State) {
      return state.tabList
    }
  }
})