import {defineStore} from "pinia"
import {Itab} from "@/store/type"

export interface TabStore {
    tabList: Array<Itab>
}

export const useTabStore = defineStore("tab", {
    state: (): TabStore => ({
        tabList: [],
    }),
    actions: {
        addAllTab(tabList: Array<Itab>) {
            this.tabList = tabList
        },
        // 点击菜单增加tab标签，重复的不添加
        addTab(tab: Itab) {
            const isSome = this.tabList.some(item => item.path === tab.path)
            if (!isSome) {
                console.log("this.tabList===", this.tabList)
                this.tabList.push(tab)
            }
        },
        delTab(currentTab: string) {
            const index = this.tabList.findIndex((item) => item.path === currentTab)
            this.tabList.splice(index, 1)
        }
    },
    getters: {
        getAddTab(): Itab[] {
            return this.tabList
        }
    }
})
