import { type App, defineAsyncComponent } from "vue";
import { createRouter, type RouteRecordRaw, createWebHashHistory } from "vue-router";

/* 动态路由 */
// const _import = (path: string) => defineAsyncComponent(async () => await import(`/view/${path}.vue`))
// const Test = () => defineAsyncComponent(async () => await import('@/view/Test/Test.vue'))
const empManagement = () =>
  defineAsyncComponent(async () => await import("@/view/systemManagement/empManagement/empManagement.vue"));
const deptManagement = () =>
  defineAsyncComponent(async () => await import("@/view/systemManagement/deptManagement/deptManagement.vue"));
const TreeFilter = () => defineAsyncComponent(async () => await import("@/view/DevelopmentCase/treeFilter/useTreeFilter.vue"));
const userManagement = () =>
  defineAsyncComponent(async () => await import("@/view/systemManagement/userManagement/userManagement.vue"));
// const modules = import.meta.glob(['@/view/*/*.vue', '@/view/*/*/*.vue'])

export const MenuList = [
  {
    path: "home",
    component: async () => await import("@/view/Home/home.vue"),
    name: "home",
    meta: {
      title: "首页",
      icon: "svg-icon:home",
      id: "1"
    }
  },
  {
    path: "system",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "mdi:user",
      id: "5"
    },
    children: [
      {
        path: "empManagement",
        name: "empManagement",
        component: empManagement,
        meta: {
          title: "员工管理",
          id: "5-1"
        }
      },
      {
        path: "deptManagement",
        name: "deptManagement",
        component: deptManagement,
        meta: {
          title: "部门管理",
          id: "5-2"
        }
      },
      {
        path: "userManagement",
        name: "userManagement",
        component: userManagement,
        meta: {
          title: "用户管理",
          id: "5-3"
        }
      }
    ]
  },
  {
    path: "developmentCase",
    name: "developmentCase",
    meta: {
      title: "开发示例",
      icon: "svg-icon:developCase",
      id: "2"
    },
    children: [
      {
        path: "treeFilter",
        name: "treeFilter",
        component: TreeFilter,
        meta: {
          title: "treeFilter",
          id: "2-3"
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
      id: "3"
    },
    children: [
      {
        path: "menu1",
        name: "menu1",
        meta: {
          title: "菜单1",
          id: "3-1"
        },
        children: [
          {
            path: "menu1-1",
            name: "menu1-1",
            component: async () => await import("@/view/NestRoute/Menu1/Menu1-1/Menu1-1.vue"),
            meta: {
              title: "菜单 1-1",
              id: "3-1-1"
            }
          },
          {
            path: "menu1-2",
            name: "menu1-2",
            meta: {
              title: "菜单 1-2",
              id: "3-1-2"
            },
            children: [
              {
                path: "menu1-2-1",
                name: "menu1-2-1",
                component: async () => await import("@/view/NestRoute/Menu1/Menu1-2/Menu1-2-1/Menu1-2-1.vue"),
                meta: {
                  title: "菜单 1-2-1",
                  id: "3-1-2-1"
                }
              },
              {
                path: "menu1-2-2",
                name: "menu1-2-2",
                component: async () => await import("@/view/NestRoute/Menu1/Menu1-2/Menu1-2-2/Menu1-2-2.vue"),
                meta: {
                  title: "菜单 1-2-2",
                  id: "3-1-2-2"
                }
              },
              {
                path: "menu1-2-3",
                name: "menu1-2-3",
                component: async () => await import("@/view/NestRoute/Menu1/Menu1-2/Menu1-2-3/Menu1-2-3.vue"),
                meta: {
                  title: "菜单 1-2-3",
                  id: "3-1-2-3"
                }
              }
            ]
          },
          {
            path: "menu1-3",
            name: "menu1-3",
            component: async () => await import("@/view/NestRoute/Menu1/Menu1-3/Menu1-3.vue"),
            meta: {
              title: "菜单 1-3",
              id: "3-1-3"
            }
          }
        ]
      },
      {
        path: "menu2",
        name: "menu2",
        component: async () => await import("@/view/NestRoute/Menu2/Menu2-1.vue"),
        meta: {
          title: "菜单2",
          id: "3-2"
        }
      }
    ]
  },
  {
    path: "test",
    name: "test",
    // component: Test,
    component: async () => await import("@/view/Test/Test.vue"),
    meta: {
      title: "测试",
      icon: "mdi:user",
      id: "4"
    }
  }
];

// 设置路由信息
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: async () => await import("@/view/Login/login.vue"),
    name: "login",
    meta: {
      title: "登录"
    }
  },
  {
    path: "/index",
    component: async () => await import("@/layout/index.vue"),
    redirect: "/index/home",
    children: [
      ...MenuList,
      {
        path: "PersonalCenter",
        name: "PersonalCenter",
        component: async () => await import("@/view/PersonalCenter/PersonalCenter.vue"),
        meta: {
          title: "个人中心"
        }
      }
    ]
  }
];
// 路由配置项
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export const setupRouter = (app: App): void => {
  app.use(router);
};
