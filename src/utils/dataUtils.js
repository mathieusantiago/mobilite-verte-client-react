import axios from "axios";

const _get = async (method, url, data, _id, subId) => {
  return axios({
    method: method,
    url: `${process.env.REACT_APP_API_URL}${url}/${_id}${
      subId ? `/${subId}` : ""
    }`,
    data: data,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default _get;
