import axios from "@/api/api";

const API = {
  introList: '/introduct/introList', // 首页介绍
  historyList: '/introduct/historyList' // 首页历史
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