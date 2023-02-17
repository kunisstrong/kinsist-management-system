import type { App } from "vue"
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"

export const MenuList = [
    {
        path: "home",
        component: () => import("@/view/Home/home.vue"),
        meta: {
            title: "首页",
            icon: "mdi:user",
            id: '1',
        }
    },
    {
        path: "moduleManage",
        meta: {
            title: "模块管理",
            icon: "mdi:user",
            id: '2',
        },
        children: [
            {
                path: "checkProject",
                component: () => import("@/view/ModuleManage/checkProject.vue"),
                meta: {
                    title: "检查项目",
                    id: '2-1',
                }
            },
            {
                path: "checkTemplate",
                component: () => import("@/view/ModuleManage/checkTemplate.vue"),
                meta: {
                    title: "检查单模块",
                    id: '2-2'
                }
            }
        ]
    },
    {
        path: "test",
        component: () => import("@/view/Test/test.vue"),
        meta: {
            title: "测试",
            icon: "mdi:user",
            id: "3"
        }
    },

]

// 设置路由信息
export const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        component: () => import('@/view/Login/login.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: "/index",
        component: () => import("@/layout/index.vue"),
        redirect: "/index/home",
        children: MenuList
    }

]

// 路由配置项
const router = createRouter(({
    history: createWebHashHistory(),
    routes: routes
}))

export const setupRouter = (app: App) => {
    app.use(router)
}
