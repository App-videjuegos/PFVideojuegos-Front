import "react-native-gesture-handler";

import {createDrawerNavigator,} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet,Image,TouchableOpacity,Text,View,Button,  SectionList,} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
const Drawer = createDrawerNavigator();

//Pantallas a Importar
import Landing from "./src/components/views/Landing/Landing";
import Home from "./src/components/views/Home/HomeD";
import MenuItems from "./src/components/views/MenuApp/MenuItems";
import Cart from "./src/components/forms/Cart/Cart";

export default function App() {

  return (
    <>  
            <NavigationContainer>
              <Drawer.Navigator
                drawerContent={(props) => <MenuItems {...props} />}
              >
                <Drawer.Screen
                  name="Landing"
                  component={Landing}
                  options={{
                    title: `Bienvenido`,
                    headerStyle: {
                      // backgroundColor: blue,
                    },
                    // headerTintColor: white,
                    headerTitleStyle: {
                      fontWeight: "bold",
                      fontSize: 25,
                    },
                  }}
                />
                <Drawer.Screen
                  name="HomeStack"
                  component={Home}
                  initialParams={{ fromChild: "Initial" }}
                  options={{
                    title: "Home",
                    // headerStyle: {
                    //   backgroundColor: color_azul,
                    // },
                    // headerTintColor: color_blanco,
                    headerTitleStyle: {
                      fontWeight: "bold",
                      fontSize: 25,
                    },
                   
                  }}
                />
 
                <Drawer.Screen
                  name="Cart"
                  component={Cart}
                  options={{
                    title: "Shopping Car",
                    // headerStyle: { backgroundColor: color_azul },
                    // headerTintColor: color_blanco,
                    headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
                  }}
                />
{/*
                <Drawer.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{
                    title: "Dashboard",
                    headerStyle: {
                      backgroundColor: color_azul,
                    },
                    headerTintColor: color_blanco,
                    headerTitleStyle: {
                      fontWeight: "bold",
                      fontSize: 25,
                    },
                  }}
                />

              
                /> */}

              </Drawer.Navigator>
            </NavigationContainer>
          
    </>
  );
}
