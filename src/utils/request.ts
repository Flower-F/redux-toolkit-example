import axios from 'axios'
import { REQUEST_BASE_URL } from '@/constants'

const axiosInstance = axios.create({
  baseURL: REQUEST_BASE_URL,
})

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    const { success, data, message } = response.data;
    if (success) {
      return data;
    }
    return Promise.reject(new Error(message));
  },
  (error) => {
    console.error('网络错误');
    return Promise.reject(new Error(error));
  },
)

export { axiosInstance as request }
