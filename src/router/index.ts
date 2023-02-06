import type {App} from "vue"
import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router"


// 设置路由信息
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('@/view/Login/index.vue'),
    },
    {
        path: '/',
        redirect: '/Home',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/Home',
                component: () => import('@/view/Home/index.vue')
            },
            {
                path: '/Test',
                component: () => import('@/view/Test/test.vue'),
                meta: {
                    title: '测试'
                },
            },
            {
                path: '/Notification',
                // component: () => import('@/layout/index.vue'),
                redirect: '/Notification/Notification1',
                meta: {
                    title: '通知'
                },
                children: [
                    {
                        path: 'Notification1',
                        component: () => import('@/view/Notification/Notification1.vue'),
                        meta: {
                            title: '通知1'
                        },
                    },
                    {
                        path: 'Notification2',
                        component: () => import('@/view/Notification/Notification2.vue'),
                        meta: {
                            title: '通知2'
                        },
                    }
                ]
            },
            {
                path: '/Employee',
                component: () => import('@/view/Employee/index.vue'),
                meta: {
                    title: '员工管理'
                },
            },
            {
                path: '/Center',
                component: () => import('@/view/Center/index.vue'),
                meta: {
                    title: '个人中心'
                },
            }
        ]
    },


]

// 路由配置项
const router = createRouter(({
    history: createWebHashHistory(),
    routes: routes
}))

export const setupRouter = (app: App) => {
    app.use(router)
}
