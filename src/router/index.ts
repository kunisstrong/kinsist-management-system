import { type App, defineAsyncComponent } from "vue";
import { createRouter, type RouteRecordRaw, createWebHashHistory } from "vue-router";

/* 动态路由 */
// const _import = (path: string) => defineAsyncComponent(async () => await import(`/view/${path}.vue`))
// const Test = () => defineAsyncComponent(async () => await import('@/view/Test/Test.vue'))
const EmpManagement = () =>
  defineAsyncComponent(async () => await import("@/view/DevelopmentCase/empManagement/empManagement.vue"));
const DepartmentManagement = () =>
  defineAsyncComponent(async () => await import("@/view/DevelopmentCase/deptManagement/deptManagement.vue"));
const TreeFilter = () => defineAsyncComponent(async () => await import("@/view/DevelopmentCase/treeFilter/useTreeFilter.vue"));
// const userManagement = () =>
//   defineAsyncComponent(async () => await import("@/view/DevelopmentCase/userManagement/userManagement.vue"));
// const modules = import.meta.glob(['@/view/*/*.vue', '@/view/*/*/*.vue'])

export const MenuList = [
  {
    path: "home",
    component: async () => await import("@/view/Home/Home.vue"),
    name: "home",
    meta: {
      title: "首页",
      icon: "svg-icon:home",
      id: "1"
    }
  },
  {
    path: "developmentCase",
    name: "developmentCase",
    meta: {
      title: "开发实例",
      icon: "svg-icon:developCase",
      id: "2"
    },
    children: [
      {
        path: "empManagement",
        name: "empManagement",
        component: EmpManagement,
        meta: {
          title: "员工管理",
          id: "2-1"
        }
      },
      {
        path: "departmentManagement",
        name: "departmentManagement",
        component: DepartmentManagement,
        meta: {
          title: "部门管理",
          id: "2-2"
        }
      },
      {
        path: "treeFilter",
        name: "treeFilter",
        component: TreeFilter,
        meta: {
          title: "treeFilter",
          id: "2-3"
        }
      },
      {
        path: "userManagement",
        name: "userManagement",
        component: async () => await import("@/view/DevelopmentCase/userManagement/userManagement.vue"),
        meta: {
          title: "用户管理",
          id: "2-4"
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
    path: "common",
    name: "common",
    meta: {
      title: "常用功能",
      id: "5",
      icon: "mdi:user"
    },
    children: [
      {
        path: "uploadAndDownload",
        name: "uploadAndDownload",
        component: async () => await import("@/view/common/uploadAndDownload.vue"),
        meta: {
          id: "5-1",
          title: "文件操作"
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
    component: async () => await import("@/view/login/login.vue"),
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
        component: async () => await import("@/view/PersonalCenter/personalCenter.vue"),
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
