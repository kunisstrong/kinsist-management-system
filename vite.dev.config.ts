import { defineConfig } from "vite"
console.log("我是开发环境")
export default defineConfig({
    server: {
        // 本机的局域网IP
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9100/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
            }
        }
    },
})
