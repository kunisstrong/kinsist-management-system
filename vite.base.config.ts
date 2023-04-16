import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from "vite-plugin-checker"
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from "vite-plugin-mock"
import eslint from 'vite-plugin-eslint' // 新增

export default defineConfig({
    plugins: [
        viteMockServe(),
        checker({
            typescript: true
        }),
        // 图标相关
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
            symbolId: 'icon-[dir]-[name]',
            svgoOptions: true
        }),
        /* 自动按需导入使用的组件 */
        AutoImport({
            imports: ['vue'],
            resolvers: [
                ElementPlusResolver(),
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
            ]
        }),
        vue(),
        eslint()
    ],
    server: {
        port: 3006
    },
    resolve: {
        // 设置别名
        alias: {
            // 用@代替src目录，com代替组件目录
            "@": path.resolve(__dirname, "src"),
            "com": path.resolve(__dirname, "src/components")
        }
    },
    css: {
        // css与处理器
        preprocessorOptions: {
            scss: {
                // 引入varibales.scss全局与定义变量
                additionalData: `@import "./src/styles/variables.scss";`
            }
        }
    }
})

