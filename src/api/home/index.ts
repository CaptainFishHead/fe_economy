import axios from "@/api/api";

const API = {
  introList: '/introduct/introList', // 首页介绍
  historyList: '/introduct/historyList', // 首页历史
  classlist: '/introduct/classlist',// 班级列表
  classPhoto: '/introduct/classPhoto',// 班级照片
  classTeacherList: 'introduct/classTeacherList',// 班级老师列表
  classVideoList: "/introduct/classVideoList",// 班级视频列表
  resourceList: "/introduct/resourceList",// 资源列表
  resourceDetail: '/introduct/resourceDetail' // 资源详情
}


export const getIntroList = () => {
  return axios({
    url: API.introList,
    method: "get"
  });
};

export const getHistoryList = () => {
  return axios({
    url: API.historyList,
    method: "get"
  });
};


export const getClassList = (params: any) => {
  return axios({
    url: API.classlist,
    method: "get",
    params: params
  });
};
export const getClassPhoto = (params: any) => {
  return axios({
    url: API.classPhoto,
    method: "get",
    params: params
  });
};

export const getClassTeacherList = (params: any) => {
  return axios({
    url: API.classTeacherList,
    method: "get",
    params: params
  });
};
export const getClassVideoList = (params: any) => {
  return axios({
    url: API.classVideoList,
    method: "get",
    params: params
  });
};

export const getResourceList = (params: any) => {
  return axios({
    url: API.resourceList,
    method: "get",
    params: params
  });
};

export const getResourceDetail = (params: any) => {
  return axios({
    url: API.resourceDetail,
    method: "get",
    params: params
  });
};