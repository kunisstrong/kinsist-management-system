import type { App } from "vue"
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"

export const MenuList = [
    {
        path: "home",
        component: () => import("@/view/Home/home.vue"),
        meta: {
            title: "首页",
            icon: "svg-icon:home",
            id: "1"
        }
    },
    {
        path: "staffManagement",
        component: () => import("@/view/EmpManagement/index.vue"),
        meta: {
            title: "员工管理",
            icon: "svg-icon:staffManagement",
            id: "4"
        }
    },{
        path: "departmentManagement",
        component: () => import("@/view/DeptManagement/deptmanagement.vue"),
        meta: {
            title: "部门管理",
            icon: "svg-icon:staffManagement",
            id: "5"
        }
    },
    // {
    //     path: "moduleManage",
    //     meta: {
    //         title: "模块管理",
    //         icon: "mdi:user",
    //         id: '2',
    //     },
    //     children: [
    //         {
    //             path: "checkProject",
    //             component: () => import("@/view/ModuleManage/checkProject.vue"),
    //             meta: {
    //                 title: "检查项目",
    //                 id: '2-1',
    //             }
    //         },
    //         {
    //             path: "checkTemplate",
    //             component: () => import("@/view/ModuleManage/checkTemplate.vue"),
    //             meta: {
    //                 title: "检查单模块",
    //                 id: '2-2'
    //             }
    //         }
    //     ]
    // },
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
                path: "personalCenter",
                name: "personalCenter",
                component: () => import("@/view/PersonalCenter/personalCenter.vue"),
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
