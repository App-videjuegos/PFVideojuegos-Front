import {configureStore} from "@reduxjs/toolkit";
import videogamesReducer from "./videogamesSlice";
import userReducer from "./userSlices"
import cartReducer from "./cartSlice"
// import salesReducer from "./salesSlice"

export default configureStore({
    reducer:{
        videogamesState: videogamesReducer,
        usersState: userReducer,
        cartState: cartReducer,
        // salesState: salesReducer,
    }
})