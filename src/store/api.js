import axios from "../components/axios/axios";

export const loginValid = async (loginData) => {
  const response = await axios.post("/auth/login", loginData);
  return response;
};
export const signupValid = async (signupData) => {
  const response = await axios.post("/auth/signup", signupData);
  return response;
};