import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loginState:localStorage.getItem('token'),
    userId:"",
    email:"",
    fname:"",
    lname:""
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        login:(state,action) =>{
            localStorage.setItem("token",action.payload.token);
            localStorage.setItem("userId",action.payload.userId);
            localStorage.setItem("email",action.payload.email);
            localStorage.setItem("fname",action.payload.fname);
            localStorage.setItem("lname",action.payload.lname);
            state.loginState = localStorage.getItem('token');
            state.userId = action.payload.userId;
            state.email = action.payload.email
            state.fname = action.payload.fname
            state.lname = action.payload.lname
        },
        logout: (state, action) => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("userId");
            localStorage.removeItem("fname");
            localStorage.removeItem("lname");
       
            state.loginState = null;
            state.userId = null;
            state.email = null;
            state.fname = null
            state.lname = null
          },
        signup:(state,action) =>{
            localStorage.setItem("token",action.payload.token);
            localStorage.setItem("userId",action.payload.userId);
            localStorage.setItem("email",action.payload.email);
            localStorage.setItem("fname",action.payload.fname);
            localStorage.setItem("lname",action.payload.lname);
            state.loginState = localStorage.getItem('token');
            state.userId = action.payload.userId;
            state.email = action.payload.email
            state.fname = action.payload.fname
            state.lname = action.payload.lname
        },
        refresh:(state,action) =>{
            state.loginState = localStorage.getItem('token');
            state.userId = localStorage.getItem('userId');
            state.email = localStorage.getItem('email');
            state.fname = localStorage.getItem('fname');
            state.lname = localStorage.getItem('lname');
        }
    }
})

export const {login,logout,signup,refresh} = loginSlice.actions;

export default loginSlice;