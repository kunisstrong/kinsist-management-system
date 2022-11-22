import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {resolve} from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
    plugins: [
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/icon/svg')],
            symbolId: 'icon-[name]'
        }),
        vue()
    ],
    server: {
        port: 3001
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
                additionalData: `@import "./src/styles/varibales.scss";`
            }
        }
    },

})
