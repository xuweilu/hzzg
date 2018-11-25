import axios from "axios";
import {API_BASE as apiBase} from "../constants";
import carouselList from "../mock/carouselList";
import priceInfo from "../mock/priceInfo";

const isDev = process.env.NODE_ENV === "development";

const CommonHeader = {
  'content-type': 'application/json'
};

export const ajax = (param) => {
  return axios(param).then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      return new Error(`status error: ${res.status}`);
    }
  })
};

export const getCarouselList = () => {
  return new Promise((resolve, reject) => {
    resolve(carouselList);
  });
  // return ajax({
  //   method: 'GET',
  //   url: `${apiBase}/carouselist`,
  //   headers: CommonHeader
  // })
};

export const getPriceInfo = () => {
  if(isDev) {
    return new Promise((resolve, reject) => {
      resolve(priceInfo);
    });
  } else {
    return new Promise((resolve, reject) => {
      window.dpd.priceinfo.get((priceInfo, err) => {
        resolve(priceInfo);
      })
    });
  }
  // return ajax({
  //   method: 'GET',
  //   url: `${apiBase}/priceinfo`,
  //   headers: CommonHeader,
  // })
};