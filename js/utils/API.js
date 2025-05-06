import axios from "axios";

export const callApi = async (method, url, dataObj) => {
  const res = await axios.request({
    method: method,
    url: "/api/" + url,
    data: dataObj,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};
