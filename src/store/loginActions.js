import {login,signup} from "./loginSlice"

import { loginValid,signupValid } from "./api";


export const loginValidate = (loginData) => {
    return async (dispatch) => {
      try {
        const responseLoginData = await loginValid(loginData);
        dispatch(login(responseLoginData.data));
        return responseLoginData
      } catch (error) {
        //    alert('Error')
      }
    };
  };
export const signupValidate = (signupData) => {
    return async (dispatch) => {
      try {
        const responseSignupData = await signupValid(signupData);
        dispatch(signup(responseSignupData.data));
        return responseSignupData
      } catch (error) {
        //    alert('Error')
      }
    };
  };

