import { defineConfig, loadEnv } from "vite"

import viteBaseConfig from "./vite.base.config"
import viteDevConfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"

const envResolver = {
    "serve": () => ({ ...viteBaseConfig, ...viteDevConfig }),
    "build": () => ({ ...viteBaseConfig, ...viteProdConfig })
}

export default defineConfig(({ command, mode }) => {

    const env = loadEnv(mode, process.cwd(), "")
    console.log("env ===", env.VITE_SOME_KEY)
    // 根据开发环境决定用哪个配置文件
    return envResolver[command]()
}
)
