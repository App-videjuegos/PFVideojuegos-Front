import "react-native-gesture-handler";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useEffect } from 'react'

import Detail from "./Detail/Detail";
import VideoGames from "./VideoGames";
import SearchBar from "./SearchBar";
import ButtonCart from "./../../forms/Cart/ButtonCart"

const Stack = createNativeStackNavigator();

const HomeD =({ navigation, route})=>{
  const titulo="Listado Vidego Juegos"
  useEffect(()=>{
    // console.log("rellamando a cabecera en home x redux");
    navigation.setOptions({
       headerTitle: `${titulo}`,
      headerStyle: {
        backgroundColor: '#D9D9D9',
      },
       headerRight: () => <ButtonCart navigation={navigation} />, 
    })
  },[])
  // },[isDarkMode,locale])

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='VideoGames'
              component={VideoGames} 
              options={{ 
                title: ' ',//va en blanco xq va la search bar
                // headerStyle: {
                //   backgroundColor: StringsDark.backgroundContainer
                // },
               headerLeft: () => (<SearchBar/> )
                
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
    </Stack.Navigator>
    
    );

}

export default HomeD