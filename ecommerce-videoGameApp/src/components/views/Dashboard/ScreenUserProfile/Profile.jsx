import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";
import { uploadImageAsync } from "../../../helpers/uploadImage";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { convertirFecha } from "../../../helpers/InvertDate";
// import imageUser from "../../../../../assets/imageUser.png";
import Reload from "../../../utils/theme/reload";


import {
  color_gris_c,
  color_morado_o,
  color_celeste,
  color_morado_c2,
  color_gris_595959,
  color_gris_dadada,
  color_morado_sc1,
  color_rojo,
  color_gris_cdcdcd,
} from "../../../utils/theme/stringsColors";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserByName, updateUser } from "../../../../redux/userActions";
//Dark Mode:

const Profile = ({ navigation }) => {
  const [acceptTac, setAcceptTac] = useState(true);
  const [receibenewsLetter, setReceivenewsLetter] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState("");
  const dispatch = useDispatch();
  const dataUserdb = useSelector((state) => state.usersState.dataUser);
  const [loading, setLoading] = useState(true);
  const loged = useSelector((state) => state.usersState.isLogged);

  const getDataFromAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("logedGameStack");
      if (data !== null) {
        console.log("Valor almacenado en AsyncStorage:", data);
        const parsedData = JSON.parse(data);
        dispatch(getUserByName(parsedData.user)); // Despachar la acción antes de actualizar el estado
        setDataUser(parsedData);
        console.log("SKMDKAKDNMASKJMDASJKDNMJKASNDKJASNASJKDNKAS",parsedData);

        // Realiza las operaciones que necesites con los datos obtenidos
        // ...
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        console.log("No se encontró ningún valor en AsyncStorage");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error al acceder a AsyncStorage:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
    getDataFromAsyncStorage();
    setImage(loged.image)
  }, 1000)
  }, []);



  
  console.log(dataUserdb);
  
  const imageUser =
  'https://res.cloudinary.com/deamondhero/image/upload/v1690180824/imageUser_g1mimk.png'
  
  const [image, setImage] = useState(loged.image);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",image)
    // !dataUserdb.length ? imageUser : dataUserdb[0].image

  //   useEffect(()=>{
  // setImage(dataUserdb[0].image)
  //   },[dataUserdb[0].image])
    
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      const arrLks = [];
      // const arrView = []
      const uploadedImages = await Promise.all(
        result.assets.map(async (image) => {
          let imageUrl = await uploadImageAsync(image.uri);

          // arrView.push(image.uri)
          arrLks.push(imageUrl);

          console.log(`3-----${arrLks}`);
          // return arrImg
        })
      );

      setImage(arrLks[0]);
      console.log(`4-----${image}`);
      console.log(`46-----${arrLks}`);
      return arrLks;
    }
  };
  console.log("ansjdnjaikndkjasnjkasndajsknda",dataUser)

  const onSubmit = async (values) => {
    const userData = {
      ...values,
      tac: acceptTac,
      newsLetter: receibenewsLetter,
      id: 1 + Math.floor(Math.random() * 999),
      userAdmin: true,
      image: image,
    };

    console.log(`Antes del try ${userData}`);
    const objupdatedUser = {};

    // Verifica cada propiedad y agrega solo las que no sean nulas
    if (userData.user) objupdatedUser.user = userData.user;
    if (userData.fullname) objupdatedUser.fullname = userData.fullname;
    if (userData.password) objupdatedUser.password = userData.password;
    if (userData.userAdmin) objupdatedUser.userAdmin = userData.userAdmin;
    if (userData.email) objupdatedUser.email = userData.email;
    if (userData.date) objupdatedUser.date = userData.date;
    if (userData.image) objupdatedUser.image = userData.image;
    if (userData.phone) objupdatedUser.phone = userData.phone;
    if (userData.tac) objupdatedUser.tac = userData.tac;
    if (userData.newsLetter) objupdatedUser.newsLetter = userData.newsLetter;
    objupdatedUser.id = dataUserdb[0].id;

    console.log(objupdatedUser);
    try {
      console.log(`Después del try ${userData}`);
      console.log(objupdatedUser);

      updateUser(objupdatedUser);

      console.log(`Respuesta del servidor:`, response.data);

      Alert.alert("Data update!", "", [
        {
          text: "Go to home",
          onPress: () => navigation.navigate("Home", { name: "Home" }),
        },
      ]);
    } catch (error) {
      console.log(
        `Error en el backend:, ${error},data enviada  ${objupdatedUser}`
      );
      Alert.alert("Auch...Something went wrong");
    }
  };
  if (loading) {
    return <Reload />;
  }
  if (!dataUserdb.length)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <ScrollView>
      <View style={[styles.bgCont]}>
        <TouchableOpacity
          onPress={pickImage}
          style={[styles.ImageButton]}
        >
          <Image
            source={{ uri: image.length ?  image : imageUser }}
            style={{ borderRadius: 100, margin: 5, width: 200, height: 200 }}
          />
        </TouchableOpacity>
      </View>

      <Formik
        initialValues={{
          user: "",
          password: "",
          fullname: "",
          email: "",
          date: "",
          phone: "",
        }}
        validate={(values) => {
          let errors = {};
          // if (values.user) {
          //   errors.user = "Modified value";
          // }
          // if (values.password) {
          //   errors.password = "Modified value";
          // }
          // if (values.fullname) {
          //   errors.fullname = "Modified value";
          // }
          // if (values.email) {
          //   errors.email = "Modified value";
          // } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
          //   errors.email = "Please enter a valid email address";
          // }
          // if (values.date) {
          //   errors.date = "Modified value";
          // }
          // if (values.phone) {
          //   errors.phone = "Modified value";
          // }

          // return errors;
        }}
        image={image}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          image,
        }) => (
          <View>
            <View
              style={[
                styles.container
              ]}
            >
              <View
                style={[
                  styles.containerLogin
                ]}
              >
                <View>
                  <TextInput
                    style={[
                      styles.input
                    ]}
                    value={values.user}
                    placeholder={dataUserdb[0].user}
                    onChangeText={handleChange("user")}
                    onBlur={handleBlur("user")}
                  />
                  {/* {errors.user && touched.user && (
                    <Text style={styles.error}>{errors.user}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input
                    ]}
                    value={values.password}
                    placeholder="••••••••••"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {/* {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input]}
                    value={values.fullname}
                    placeholder={dataUserdb[0].fullname}
                    onChangeText={handleChange("fullname")}
                    onBlur={handleBlur("fullname")}
                  />
                  {/* {errors.fullname && touched.fullname && (
                    <Text style={styles.error}>{errors.fullname}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input]}
                    value={values.email}
                    placeholder={dataUserdb[0].email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                  {/* {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input
                    ]}
                    value={values.date}
                    placeholder={convertirFecha(dataUserdb[0].date)}
                    onChangeText={handleChange("date")}
                    onBlur={handleBlur("date")}
                  />
                  {/* {errors.date && touched.date && (
                    <Text style={styles.error}>{errors.date}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input]}
                    value={values.phone}
                    placeholder={dataUserdb[0].phone}
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                  />
                  {/* {errors.phone && touched.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )} */}
                </View>

                <View style={styles.boxcontainercheckbox}>
                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={styles.checkbox}
                      value={acceptTac}
                      onValueChange={setAcceptTac}
                    />
                    <Text
                      style={[
                        styles.checkboxParagraph
                      ]}
                    >
                      I accept the Terms and Conditions
                    </Text>
                  </View>

                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={styles.checkbox}
                      value={receibenewsLetter}
                      onValueChange={setReceivenewsLetter}
                    />
                    <Text
                      style={[
                        styles.checkboxParagraph
                      ]}
                    >
                      I want to receive the newsLetter
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.submitContainer}>
                <TouchableOpacity
                  style={[
                    styles.miniButton
                  ]}
                  onPress={handleSubmit}
                >
                  <Text
                    style={[
                      styles.buttonText
                    ]}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  /////
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_gris_c,
    width: "100%",
  },

  title: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: color_morado_o,
    width: "100%",
  },

  bgCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color_gris_c,
  },

  container: {
    marginTop: 0,
    backgroundColor: color_gris_c,
    alignItems: "center",
    padding: 8,
  },

  containerLogin: {
    width: 340,
    padding: 10,
  },

  input: {
    textAlign: "center",
    height: 42,
    width: 315,
    borderColor: color_gris_c,
    backgroundColor: color_gris_dadada,
    borderRadius: 8,
  },

  ImageButton: {
    marginTop: 16,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: color_morado_o,
    borderRadius: 125,
  },
  miniButton: {
    marginTop: 15,
    marginBottom: 32,
    height: 42,
    width: 315,
    padding: 0,
    backgroundColor: color_morado_sc1,
    borderRadius: 5,
  },
  dateButton: {
    height: 42,
    width: 315,
    padding: 0,
    backgroundColor: color_gris_dadada,
    borderRadius: 5,
  },
  buttonTextDate: {
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    fontWeight: "600",
    color: color_gris_cdcdcd,
  },
  error: {
    textAlign: "center",
    fontSize: 14,
    color: color_rojo,
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: color_gris_c,
  },

  boxcontainercheckbox: {
    flex: 1,
    marginTop: 16,
    alignItems: "flex-start",
  },

  checkboxSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxParagraph: {
    color: color_gris_595959,
    fontSize: 14,
  },
  checkbox: {
    margin: 8,
  },
});

export default Profile;
