import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const api = axios.create({
  baseURL: '/api',
  timeout: 30000, // 请求超时时间
});
// 请求拦截器
api.interceptors.request.use(
  function (config: any) {
    // 发送请求之前做什么
    // 获取token鉴权
    // let userInfo: any = {};
    // if (localStorage.getItem("user-info")) {
    //   userInfo = JSON.parse(localStorage.getItem("user-info") as string);
    // }
    // if (userInfo?.token) {
    // 有token，在请求头中携带token
    //   config.headers.Authorization = userInfo.token;
    // }
    return config;
  },
  function (error: any) {
    // 请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  function (response: any) {
    if (response.status != 200) {
      ElMessage.error("服务器异常，请联系管理员");
      return Promise.reject(response.data);
    }
    let res = response.data;
      if (res.code == 401) {
      ElMessage.error("登录状态已过期");
      return Promise.reject(res);
    } else if (res.code == 404) {
      ElMessage.error("请求连接超时");
      return Promise.reject(res);
    } else if (res.code != 200) {
      ElMessage.error(res.message);
      return Promise.reject(res);
    } else {
      // 返回数据
      return Promise.resolve(res.data);
    }
  },
  function (error: any) {
    return Promise.reject(error);
  }
);
export default api