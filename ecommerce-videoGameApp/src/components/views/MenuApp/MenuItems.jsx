import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import MenuBottonItem from "./MenuButton";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { LanguajeContext } from "../../utils/languaje/languajeProvider";
import { ThemeContext } from "../../utils/theme/ThemeProvider";
import { ChangeButtonContext } from "../../utils/changeContextButton/ChangeContextButton";
import { useContext } from "react";

const MenuItems = ({ navigation }) => {
  //esta linea debo de llamar en cada componente
  const { StringsDark } = useContext(ThemeContext);
  const { StringsLanguaje } = useContext(LanguajeContext);

  return (
    <DrawerContentScrollView
      style={{ backgroundColor: StringsDark.menuDrawner_f }}
    >
      <View style={{ backgroundColor: StringsDark.menuDrawner_c }}>
        <View style={styles.cabeceraimg}>
          <Image
            source={require("../../../../assets/icon.png")}
            style={styles.imgmenu}
          />
        </View>
        <View style={styles.cabeceraText}>
          <Text
            style={[styles.textoUsr, { color: StringsDark.menuDrawner_t }]}
          ></Text>
        </View>
        <View
          style={[
            styles.separator,
            { borderColor: StringsDark.menuDrawner_sep },
          ]}
        ></View>
      </View>
      <MenuBottonItem
        nombre={StringsLanguaje.Landing}
        onPress={() => navigation.navigate("Landing")}
        icon="airplane"
      />
      <MenuBottonItem
        nombre={StringsLanguaje.Home}
        onPress={() => navigation.navigate("HomeStack")}
        icon="home"
      />
      <MenuBottonItem
        nombre={StringsLanguaje.Shopping_Car}
        onPress={() => navigation.navigate("Cart")}
        icon="cart"
      />
      <MenuBottonItem
        nombre={StringsLanguaje.CreateVideogame}
        onPress={() => navigation.navigate("CreateVideogame")}
        icon="cart"
      />
      <MenuBottonItem
        nombre={StringsLanguaje.Login}
        onPress={() => navigation.navigate("Login")}
        icon="cart"
      />
      {/* Botones para cambiar el modoDark o Idioma */}
      <ChangeButtonContext name={StringsLanguaje.DarkMode} tipo={"theme"} />
      <ChangeButtonContext name={StringsLanguaje.Languaje} tipo={"Languaje"} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  cabeceraimg: {
    flexDirection: "row",
    // alignContent: 'space-between',
    alignItems: "center",
    alignContent: "space-around",
  },
  imgmenu: {
    marginLeft: 20,
    padding: 20,
    width: 120,
    height: 80,
    // justifyContent: '',

    resizeMode: "contain",
  },
  icon: {
    marginLeft: 70,
    width: 50,
    height: 50,
    // alignContent: 'flex-end',
    // alignItems: '',
    resizeMode: "contain",
    borderRadius: 100,
  },
  cabeceraText: {
    alignContent: "center",
    alignItems: "center",
  },
  btnIngresa: {
    margin: 3,
    width: 150,
    height: 40,
    // backgroundColor: color_blanco,
    borderRadius: 10,
    // color: color_crema,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  textoUsr: {
    fontSize: 13,
    // color:color_blanco,
  },

  separator: {
    // marginVertical: 30,
    // height: 0,
    width: "100%",
    marginTop: 5,
    //  borderColor:'red',
    borderWidth: 2,
    // color: color_negro,
  },
});
export default MenuItems;
