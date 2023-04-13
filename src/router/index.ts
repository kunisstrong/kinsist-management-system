import type {App} from "vue"
import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router"

export const MenuList = [
    {
        path: "home",
        component: () => import("@/view/Home/Home.vue"),
        meta: {
            title: "首页",
            icon: "svg-icon:Home",
            id: "1"
        }
    },
    {
        path: "staffManagement",
        component: () => import("@/view/EmpManagement/EmpManagement.vue"),
        meta: {
            title: "员工管理",
            icon: "svg-icon:staffManagement",
            id: "4"
        }
    },
    {
        path: "departmentManagement",
        component: () => import("@/view/DeptManagement/DeptManagement.vue"),
        meta: {
            title: "部门管理",
            icon: "svg-icon:staffManagement",
            id: "5"
        }
    },
    {
        path: "ModuleManage",
        meta: {
            title: "模块管理",
            icon: "mdi:user",
            id: '2',
        },
        children: [
            {
                path: "checkProject",
                component: () => import("@/view/ModuleManage/CheckProject.vue"),
                meta: {
                    title: "检查项目",
                    id: '2-1',
                }
            },
            {
                path: "checkTemplate",
                component: () => import("@/view/ModuleManage/CheckTemplate.vue"),
                meta: {
                    title: "检查单模块",
                    id: '2-2'
                }
            }
        ]
    },
    {
        path: "test",
        component: () => import("@/view/Test/Test.vue"),
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
        component: () => import('@/view/Login/Login.vue'),
        name: "login",
        meta: {
            title: '登录'
        },
    },
    {
        path: "/index",
        component: () => import("@/layout/index.vue"),
        redirect: "/index/home",
        children: [
            ...MenuList,
            {
                path: "PersonalCenter",
                name: "PersonalCenter",
                component: () => import("@/view/PersonalCenter/PersonalCenter.vue"),
                meta: {
                    title: "个人中心"
                }
            },
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
