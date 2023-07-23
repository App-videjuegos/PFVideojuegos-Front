import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataUser: {},
  allUsers: [],
  gamesUser: [],
  usrMsgErr: "",
  userLoged:false,
  userToken:"",

};
export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsrByID: (state, action) => {
      state.dataUser = action.payload;
    },
    getUsrByName: (state, action) => {
        state.dataUser = action.payload;
      },
    getAllUsr: (state, action) => {
      state.allUsers = action.payload;
    },
    updateUsr: (state, action) =>{
        state.dataUser = action.payload
    },
    gamesUsr: (state,action) =>{
        state.dataUser = action.payload 
    },
    usrMsgErr: (state,action) =>{
        state.dataUser = action.payload 
    },
    setUserLoged:(state,{payload})=>{
      console.log("quee sta llegado??", payload)
      state.isLogged = payload
    },
    setUserToken: (state, action) => {
      console.log("token----->", action.payload);
      state.userToken = action.payload;
    },


  },
});
export const { getUsrByID, getUsrByName, getAllUsr, updateUsr, gamesUsr , usrMsgErr ,setUserLogging,setUserToken} = UsersSlice.actions;
export default UsersSlice.reducer;