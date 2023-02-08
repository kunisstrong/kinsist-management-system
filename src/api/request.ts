// 二次封装axios
import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
    // config：配置对象 对象里面有一个属性很重要，headers请求头
    return config
})

// 响应拦截器
service.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    return Promise.reject(new Error('fail'))
})

export default service
