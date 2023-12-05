import axios from "axios";

export const API_URL = "http://localhost:3000/admins";

export const addUser = async (data) => {
  const res = await axios.post(API_URL, data);
  console.log(res);
};
