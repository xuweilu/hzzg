// import axios from "axios";
// import {API_BASE as apiBase} from "../constants";
import carouseList from "../mock/carouselList";
import data from "../mock/data";

// const CommonHeader = {
//   'content-type': 'application/json'
// };

// export const ajax = (param) => {
//   return axios(param).then(res => {
//     if(res.status == 200) {
//       return res.data
//     }else {
//       return new Error(`status error: ${res.status}`);
//     }
//   })
// };

export const getCarouselList = () => {
  return new Promise(resolve => {
    resolve(carouseList);
  });
  // return ajax({
  //   method: 'GET',
  //   url: `${apiBase}`,
  //   headers: CommonHeader
  // })
};

export const getMainInfo = () => {
  return new Promise(resolve => {
    resolve(data);
  });
}