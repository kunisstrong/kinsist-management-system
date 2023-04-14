import type {App} from "vue"
import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router"
// import CheckProject from

export const MenuList = [
    {
        path: "home",
        component: () => import("@/view/Home/Home.vue"),
        name: "home",
        meta: {
            title: "首页",
            icon: "svg-icon:home",
            id: "1"
        }
    },
    {
        path: "staffManagement",
        name: "staffManagement",
        component: () => import("@/view/EmpManagement/EmpManagement.vue"),
        meta: {
            title: "员工管理",
            icon: "svg-icon:staffManagement",
            id: "2"
        }
    },
    {
        path: "departmentManagement",
        name: "departmentManagement",
        component: () => import("@/view/DeptManagement/DeptManagement.vue"),
        meta: {
            title: "部门管理",
            icon: "svg-icon:department",
            id: "3"
        }
    },
    {
        path: "moduleManage",
        name: "moduleManage",
        meta: {
            title: "模块管理",
            icon: "mdi:user",
            id: '4',
        },
        children: [
            {
                path: "checkProject",
                name: "checkProject",
                component: () => import("@/view/ModuleManage/CheckProject.vue"),
                meta: {
                    title: "检查项目",
                    icon: "mdi:user",
                    id: '4-1',
                }
            },
            {
                path: "checkTemplate",
                name: "moduleManage.checkTemplate",
                component: () => import("@/view/ModuleManage/CheckTemplate.vue"),
                meta: {
                    title: "检查单模块",
                    icon: "mdi:user",
                    id: '4-2',
                }
            }
        ]
    },
    {
        path: "nestRoute",
        name: "nestRoute",
        meta: {
            title: "嵌套路由",
            icon: "svg-icon:menu",
            id: "6"
        },
        children: [
            {
                path: "menu1",
                name: "menu1",
                meta: {
                    title: "菜单1",
                    id: "6-1"
                },
                children: [
                    {
                        path: "menu1-1",
                        name: "menu1-1",
                        component: () => import("@/view/NestRoute/Menu1/Menu1-1/Menu1-1.vue"),
                        meta: {
                            title: "菜单 1-1",
                            id: "6-1-1"
                        },
                    },
                    {
                        path: "menu1-2",
                        name: "menu1-2",
                        meta: {
                            title: "菜单 1-2",
                            id: "6-1-2"
                        },
                        children: [
                            {
                                path: "menu1-2-1",
                                name: "menu1-2-1",
                                component: () => import("@/view/NestRoute/Menu1/Menu1-2/Menu1-2-1/Menu1-2-1.vue"),
                                meta: {
                                    title: "菜单 1-2-1",
                                    id: "6-1-2-1"
                                },
                            },
                            {
                                path: "menu1-2-2",
                                name: "menu1-2-2",
                                component: () => import("@/view/NestRoute/Menu1/Menu1-2/Menu1-2-2/Menu1-2-2.vue"),
                                meta: {
                                    title: "菜单 1-2-2",
                                    id: "6-1-2-2"
                                },
                            },
                            {
                                path: "menu1-2-3",
                                name: "menu1-2-3",
                                component: () => import("@/view/NestRoute/Menu1/Menu1-2/Menu1-2-3/Menu1-2-3.vue"),
                                meta: {
                                    title: "菜单 1-2-3",
                                    id: "6-1-2-3"
                                },
                            },
                        ]
                    },
                    {
                        path: "menu1-3",
                        name: "menu1-3",
                        component: () => import("@/view/NestRoute/Menu1/Menu1-1/Menu1-3.vue"),
                        meta: {
                            title: "菜单 1-3",
                            id: "6-1-3"
                        },
                    },
                ]
            },
            {
                path: "menu2",
                name: "menu2",
                component: () => import("@/view/NestRoute/Menu2/Menu2-1.vue"),
                meta: {
                    title: "菜单2",
                    id: "6-2"
                },
            }
        ]
    },
    {
        path: "test",
        name: "test",
        component: () => import("@/view/Test/Test.vue"),
        meta: {
            title: "测试",
            icon: "mdi:user",
            id: "5"
        },
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
                name: 'PersonalCenter',
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
