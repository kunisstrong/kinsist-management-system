import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router";


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
                path: '/Notification',
                component: () => import('@/view/Notification/index.vue'),
                meta: {
                    title: '通知'
                },
            },
            {
                path: '/Employee',
                component: () => import('@/view/Employee/index.vue'),
                meta: {
                    title: '员工管理'
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

export default router
