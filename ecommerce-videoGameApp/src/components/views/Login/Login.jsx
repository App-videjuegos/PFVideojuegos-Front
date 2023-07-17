import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
  TextInput,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

import {
  color_gris_c,
  color_morado_o,
  color_celeste,
  color_morado_c2,
  color_gris_595959,
  color_gris_cdcdcd,
} from "../../utils/theme/stringsColors";

// import { persons } from "../../../utils/arrayPersons";
import { Formik } from "formik";
import { useState, useEffect } from "react";
// import axios from "axios";
// import { logService } from "../../../services/ServiceLogin";
// import {getItemAsyncStorage,InsertUserAsynStorage,removeItem} from '../Forms/Cart/CardCartController'
// import { useFocusEffect } from '@react-navigation/native';
import { setUserLogging } from "../../../redux/userSlices";
import { useDispatch } from "react-redux";
export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState();

  const [session, setSession] = useState(null);
  const [user, setUser] = useState("");
  const [logginUser, setLoggingUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    getUserStorage();
  }, [isLogged]);

  const getUserStorage = async () => {
    try {
      const LoggedUserJSON = await getItemAsyncStorage("loggedGameShop");
      // console.log("variable LoggedUserJSON->",LoggedUserJSON)
      if (LoggedUserJSON !== "vacio") {
        setLoggingUser(LoggedUserJSON);
        setIsLogged(true);
        // dispatch(setUserLogging(true))
        console.log("Usuario Cargado correctamente");
      } else {
        setLoggingUser("vacio");
        setIsLogged(false);
        // dispatch(setUserLogging(false))
      }
    } catch (error) {
      console.log("Error al obtener la clave de  loggedGameShop:", error);
    }
  };

  //console.log("estado loginuser--->",(logginUser))
  const handdleLogout = () => {
    removeItem("loggedGameShop");
    setUser("");
    setPassword("");
    dispatch(setUserLogging(false));
    setIsLogged(false);
  };
  const handdleLogin = async (values) => {
    // console.log("values recibido en hanndler", values)
    setUser(values.user);
    setPassword(values.password);
    // console.log("que hay en estado user", values.user)
    // console.log("que hay en estado password", values.password)
    // try {
    const userCredencials = await logService({
      user: values.user, // Utiliza values.user en lugar de user
      password: values.password, // Utiliza values.password en lugar de password
    });
    // console.log("data recibida del backHardCode",userCredencials)
    if (userCredencials !== null) {
      // "Error de autenticación"
      // console.log("que llega de LOG SERVICE->",userCredencials)
      if (userCredencials.id !== undefined) {
        InsertUserAsynStorage(
          "loggedGameShop",
          JSON.stringify(userCredencials)
        );
        dispatch(setUserLogging(true));
        setIsLogged(true);
        setUser("");
        setPassword("");
        navigation.navigate("HomeScreen");
      } else {
        console.log("no encontrado");
        alert("Password Incorrecto");
        return;
      }
    }
    // catch (error) {
    //   setErrorMsg(true);
    //   setTimeout(() => {
    //     setErrorMsg(false);
    //   }, 5000);

    //   console.log("rompio en handle Logging !!!!!",error);
    // }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      validate={(val) => {
        let errors = {};

        if (!val.user) {
          errors.user = "Enter Username";
        }
        // else if (!persons.some((e) => e.user.includes(val.user))) {
        //   errors.user = "Username invalid";
        // }

        if (!val.password) {
          errors.password = "Enter password";
        }
        // else if (user ? ){ errors.user = "Username invalid"}

        return errors;
      }}
      onSubmit={handdleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        handdleLogin,
        values,
        errors,
        touched,
        onSubmit,
      }) => {
        return (
          <View style={[styles.container]}>
            <View style={[styles.header]}>
              <Image
                style={styles.logo}
                source={require("../../../../assets/logoLigth.png")}
              ></Image>
            </View>
            <View style={[styles.containerLogin]}>
              <View>
                <TextInput
                  placeholder="Username"
                  value={values.user}
                  onChangeText={handleChange("user")}
                  onBlur={handleBlur("user")}
                  style={styles.input}
                />
                {errors.user && touched.user && (
                  <Text style={styles.error}>{errors.user}</Text>
                  )}
              </View>

              <View>
                <TextInput
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secureTextEntry={true}
                  onBlur={handleBlur("password")}
                  style={styles.input}
                />
                {/* <TouchableOpacity title={isPasswordVisible ? 'Hide Password' : 'Show Password'} onPress={() => setIsPasswordVisible(!isPasswordVisible)} /> */}
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                  )}
              </View>

              {errorMsg && <Text>Incorrect user or password</Text>}

                  <TouchableOpacity
                    style={[styles.miniButton]}
                    onPress={handleSubmit}
                  >
                    <Text style={[styles.buttonText]}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.miniButtonRegister]}
                    onPress={handleSubmit}
                  >
                    <Text style={[styles.buttonTextRegister]}>Forgot Password?</Text>
                  </TouchableOpacity>
    

              <View>
                <View>
                  <Text style={{ textAlign: "center", fontSize:16, marginTop:8, color: color_morado_c2, fontWeight:"bold"}}>or</Text>
                </View>
                <View>
                  <Text style={{ textAlign: "center", fontSize:16, marginTop:8, color: color_morado_c2, fontWeight:"bold"}}>
                    -------- sing in --------
                  </Text>
                </View>
                <TouchableOpacity style={styles.buttonGoogle}>
                  <Image
                    style={styles.imageGoogle}
                    source={require("../../../../assets/singinwhitgoogle.png")}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.containerLogin}>
                {/* <Text style={[{ fontSize: 45 }]}>Welcome</Text>
                <Text style={[{ fontSize: 20 }, { fontWeight: "bold" }]}>
                Fullname
                </Text>
                <Image
                style={styles.perfil}
                  source={{ uri: logginUser.image }}
                ></Image> */}
                {/* <TouchableOpacity
                  onPress={() => {
                    handdleLogout();
                  }}
                  style={[styles.miniButtonLogout]}
                  >
                  <Text style={[styles.buttonText]}>Logout</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={[styles.miniButtonRegister]}
                  onPress={() =>
                    navigation.navigate("CreateUser", { name: "CreateUser" })
                  }
                >
                  <Text style={[styles.buttonTextRegister]}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_gris_c,
    width: "100%",
  },

  logo: {
    marginTop: 42,
    marginBottom:42,
    height: 42,
    width: 315,
  },
  perfil: {
    margin: 10,
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  container: {
    backgroundColor: color_gris_c,
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },

  containerLogin: {
    margin: "auto",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 315,
    height: "85%",
    backgroundColor: color_gris_c,
    alignItems: "center",
    padding: 10,
  },

  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    textAlign: "center",
    height: 42,
    width: 315,
    marginTop:8,
    borderColor: color_morado_c2,
    paddingHorizontal: 70,

    borderRadius: 5,
    backgroundColor: color_gris_cdcdcd,
  },
  miniButton: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 16,
    height: 42,
    width: 315,
    padding: 0,
    backgroundColor: color_morado_c2,
    borderRadius: 8,
  },

  miniButtonRegister: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 8,
    height: 42,
    width: 315,
    padding: 0,
    backgroundColor: color_gris_c,
    borderRadius: 8,
  },
  
  miniButtonLogout: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "50%",
    height: "10%",
    width: "50%",
    padding: 0,
    backgroundColor: color_gris_cdcdcd,
    borderRadius: 8,
  },
  error: {
    textAlign: "center",

    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: color_gris_c,
  },

  buttonTextRegister: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: 'normal',
    color: color_celeste,
  },
  buttonGoogle: {
    marginTop: 16,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 20,
    color: color_morado_c2,
  },
  imageGoogle: {
    height: 40,
    width: 250,
  },
});
