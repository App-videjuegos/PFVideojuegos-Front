import { Alert } from "react-native";
import {
  getAllUsr,
  getUsrByID,
  getUsrByName,
  gamesUsr,
  updateUsr,
  usrMsgErr,
  setUserLoged,
  setUserToken,
} from "./userSlices";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadItemAsyncStorage } from "../components/helpers/functionsAsyncStorage";


export const getUserByID = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `https://pfvideojuegos-back-production.up.railway.app/user/${id}`
        );
  
        const dataUser = response.data;
  
        if (dataUser) {
          dispatch(getUsrByID(dataUser));
        } else {
          dispatch(usrMsgErr("No user registration"));
        }
      } catch (err) {
        console.log(`Error: ${err}`);
        dispatch(usrMsgErr(err));
      }
    };
  };

  export const getUserByName = (name) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `https://pfvideojuegos-back-production.up.railway.app/user?user=${name}`
        );
  
        const dataUser = response.data;
  
        if (dataUser) {
          dispatch(getUsrByName(dataUser));
        } else {
          dispatch(usrMsgErr("No user registration"));
        }
      } catch (err) {
        console.log(`Error: ${err}`);
        dispatch(usrMsgErr(err));
      }
    };
  };

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://pfvideojuegos-back-production.up.railway.app/user`
      );

      const dataUsers = response.data;

      if (dataUsers) {
        dispatch(getAllUsr(dataUsers));
      } else {
        dispatch(usrMsgErr("No user registration"));
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      dispatch(usrMsgErr(error));
    }
  };
};

export const postUser = (data) => {
  if(data.user,data.password,data.fullname,data.email,data.date,data.image,data.number,data.tac === true,data.newsLetter)
  axios.post("https://pfvideojuegos-back-production.up.railway.app/user", 
  {
   id: 1 + Math.floor(Math.random() * 999),
   user: data.user,
   password: data.password,
   fullname: data.fullname,
   userAdmin: false,
   email: data.email,
   date:data.date,
   image: data.image,
   phone:data.number,
   tac:data.tac,
   tac:data.newsLetter, 

  });
};




  export const updateUser = async (newData) => {
    const oldData = { ...newData };
    try {
      const response = await axios.put(
        'https://pfvideojuegos-back-production.up.railway.app/user/update',
        newData
      );
  
      const changedFields = [];
      console.log(response);
      for (const key in newData) {
        if (oldData[key] !== response.data[key]) {
          changedFields.push(key);
        }
      }
  
      if (changedFields.length > 0) {
        // Obtén los datos existentes del AsyncStorage
        const storedData = await AsyncStorage.getItem('user');
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          const updatedData = { ...parsedData };
  
          console.log(changedFields)
          // Actualiza las propiedades modificadas en el AsyncStorage
          for (const field of changedFields) {
            updatedData[field] = response.data[field];
          }

          let message = "Was modified: ";
          for (const field of changedFields) {
            message += `${field}: ${oldData[field]} -> ${response.data[field]}, `;
          }
          message = message.slice(0, -2); // Eliminar la coma y el espacio al final
  
          // Guarda los datos actualizados en el AsyncStorage
          await AsyncStorage.setItem('user', JSON.stringify(updatedData));

          Alert.alert(message)
        }
      }
    } catch (error) {
      Alert.alert("Something went wrong", "error updating data");
      console.log("error updating data", err);
    }
  };


  export const logedUser = () => {
    return async (dispatch) => {
      try {
        const loged = await loadItemAsyncStorage('user');
        if (loged) {
          const logedData = JSON.parse(loged);
          dispatch(setUserLogging(true));
        } else {
          dispatch(setUserLogging(false));
        }
      } catch (error) {
        console.error('Error al obtener la información del usuario logeado:', error);
      }
    };
  };


  export const tokenUser = () => {
    return async (dispatch) => {
      try {
        const user = await loadItemAsyncStorage('user');
        if (user) {
          const userData = JSON.parse(user);
          dispatch(setUserToken(userData.token));
        } else {
          dispatch(setUserToken(null));
        }
      } catch (error) {
        console.error('Error al obtener el token del usuario:', error);
      }
    };
  };