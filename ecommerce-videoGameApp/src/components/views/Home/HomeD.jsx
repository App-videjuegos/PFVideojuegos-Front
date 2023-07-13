import "react-native-gesture-handler";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text } from "react-native";
import Detail from "./Detail/Detail";
import VideoGames from "./VideoGames";
import SearchBar from "./SearchBar";
import ButtonCart from "./../../forms/Cart/ButtonCart"
import { useEffect ,useContext} from 'react'
import { ThemeContext } from '../../utils/theme/ThemeProvider';
import { LanguajeContext } from '../../utils/languaje/languajeProvider';
import { CreateVideogame } from '../Create/CreateVideoGame'

import {getvideoGames,} from "../../../redux/videogamesActions"
const Stack = createNativeStackNavigator();

const HomeD =({ navigation, route})=>{

//linea para setear el modo dark
const { isDarkMode, StringsDark } = useContext(ThemeContext);
//linea para setear el lenguaje /obtener palabras de lenguaje
const {StringsLanguaje ,locale}= useContext(LanguajeContext)


  
  useEffect(()=>{
    // console.log("rellamando a cabecera en home x redux");
    navigation.setOptions({
        headerTitle: `${ StringsLanguaje.Home}`,
        headerStyle: {
        backgroundColor: StringsDark.Titulo_Screen_fondo,
      },
       headerRight: () => <ButtonCart navigation={navigation} />, 
    })
  },[isDarkMode,locale])
  

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='VideoGames'
              component={VideoGames} 
              options={{ 
                title: '',//va en blanco xq va la search bar
                headerStyle: {
                  backgroundColor: StringsDark.Titulo_Screen_fondo
                },
               headerLeft: () => (<SearchBar/> ),
               headerRight:()=> <Text>filtros</Text>,
                
              }}
        >     
        </Stack.Screen>
        <Stack.Screen
        name='Detail'
              component={Detail} 
              options={{ 
                title: 'Detail',
                // headerStyle: {
                //   backgroundColor: StringsDark.backgroundTittle,
                // },
                // headerTintColor: StringsDark.titblanco,
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:25
                }
              }}
              >
        </Stack.Screen>
        <Stack.Screen
        name='CreateVideogame'
              component={CreateVideogame} 
              options={{ 
                title: 'Create Videogame',
                // headerStyle: {
                //   backgroundColor: StringsDark.backgroundTittle,
                // },
                // headerTintColor: StringsDark.titblanco,
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:25
                }
              }}
              >
        </Stack.Screen>
    </Stack.Navigator>
    
    );

}

export default HomeD