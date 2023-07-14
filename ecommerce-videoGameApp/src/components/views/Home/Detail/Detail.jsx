import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import DetailExtra from './DetailExtra';
import DetailInfo from './DetailInfo';
import DetailScreenHots from './DetailScreenHots';

const TabInfo= (props) => {
    // console.log("q recibo por props tab info", props.parametro1)
    return (
      <>
      <DetailInfo  propInfo= {props.parametro1} />
    </>
    )
  }
  const TabCarrousel= (props) => {
    //  console.log("screnshoots", props.parametro2)
    return (
      <>
       <DetailScreenHots propCarrousel= {props.screenShots}  />
      </>
    )  
  }
  const TabExtra= (props) => {
    //  console.log("props TabExtra", props.parametro3)
    return (
      <>
       <DetailExtra propExtra= {props.parametro3}  />
      </>
    )
  }
const Detail = ({route,navigation}) => {
    
    const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator

        screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: "#D9D9D9",
            },
            tabBarStyle: {
              backgroundColor: "#FF8800",
            },
            tabBarLabelStyle: {
              color: "#FFFFFF"
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25,
              color: "#E94E4E"
            }
          })}
        >
        <Tab.Screen 
            name={"information"} //detalle de CARD
            options={({ route }) => ({
                tabBarIcon: ({  size }) => (
                <MaterialCommunityIcons name="information-circle-outline" 
                // color={StringsDark.bkContesp} 
                size={size} />
                )
            })}
        >
            {props => <TabInfo {...props} parametro1= {route.params.videoGames} />}
        </Tab.Screen>

        <Tab.Screen 
            name="Capturas de Pantalla" 
            
            options={{
                title: `Screenshoots`,
                tabBarIcon: ({  size }) => (
                <MaterialCommunityIcons name="images-outline" 
                // color={StringsDark.bkContesp} 
                size={size} />
                )
            }}>

            {props => <TabCarrousel {...props}  screenShots= {route.params.videoGames.screenShots} />}
        </Tab.Screen>
        <Tab.Screen 
            name="Extra" 
            options={{
                title: `Extra`,
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="file-tray-stacked-outline" 
                // color={StringsDark.bkContesp} 
                size={size} />
                )
            }}
            >
                {props => <TabExtra {...props}  parametro3= {route.params.videoGames} />}
        </Tab.Screen>
        
    </Tab.Navigator>
  )
}

export default Detail