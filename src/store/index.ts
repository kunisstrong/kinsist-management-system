import {createStore} from 'vuex'
import {Itab} from './type';

interface State {
    tabList: Array<Itab>
}

export const store = createStore<State>({
    state: {
        // tab标签
        tabList: []
    },
    mutations: {
        addAllTab(state: State, tabList: Array<Itab>) {
            state.tabList = tabList
        },
        // 点击菜单增加tab标签，重复的不添加
        addTab(state: State, tab: Itab) {
            const isSome = state.tabList.some(item => item.path === tab.path)
            if (!isSome) {
                state.tabList.push(tab)
            }
        },
        delTab(state: State, currentTab: string) {
            const index = state.tabList.findIndex((item) => item.path === currentTab)
            state.tabList.splice(index, 1)
        }
    },
    getters: {
        // 通过getters获取tab标签更容易
        getAddTab(state: State) {
            return state.tabList
        }
    }
})
