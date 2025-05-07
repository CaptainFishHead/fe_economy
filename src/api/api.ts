import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // api的base_url
  timeout: 10000, // 请求超时时间
});
// 请求拦截器
api.interceptors.request.use(
  (config: any) => {
    config.data = JSON.stringify(config.data);
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error) => {
    console.log('响应失败', error);

    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        ElMessage.error("服务器响应超时，请刷新当前页");
      }
      error.message = "连接服务器失败";
    }

    ElMessage.error({
      message: error.message,
      center: true,
      customClass: ""
    })
    return Promise.resolve(error.response);
  }
);
export default api