import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import { useEffect ,useContext} from 'react'
import { StatusBar } from 'react-native';
import { ThemeContext } from '../../utils/theme/ThemeProvider';
import { LanguajeContext } from '../../utils/languaje/languajeProvider';


const Landing = ({ navigation}) => {

 //linea para setear el modo dark
 const { isDarkMode, StringsDark } = useContext(ThemeContext);
 //linea para setear el lenguaje /obtener palabras de lenguaje
 const {StringsLanguaje, locale }= useContext(LanguajeContext)

useEffect(()=>{

  navigation.setOptions({
      
      headerTitle: `${StringsLanguaje.Welcome}`,
      headerTintColor:  StringsDark.Titulo_Screen,
      headerStyle: {
        backgroundColor: StringsDark.Titulo_Screen_fondo,
      },
    })
 },[isDarkMode,locale])
  return (
    
    <View style={[styles.Container,
      {backgroundColor:StringsDark.menuDrawner_c}
    ]
      }>
      <StatusBar backgroundColor={StringsDark.status_bar} barStyle="light-content" />
      <View style={styles.imgContainer}>
          <Image 
            source= {
              isDarkMode ? require( '../../../../assets/logoDark.png')
                         : require( '../../../../assets/logoLigth.png')
            }
            style={[styles.image,isDarkMode && styles.Darkimage]}
            
            />
      </View>
      <View style={styles.buttonContainer} >

      <TouchableOpacity onPress={() =>
      navigation.navigate('HomeStack')
        }
      > 
      <View style={[styles.button,{backgroundColor:StringsDark.boton_fondo} ]}>
      <Text style={[styles.buttonText, {color:StringsDark.boton_texto}  ]}>
        {StringsLanguaje.Acces}
        
        </Text>
      </View>
      </TouchableOpacity>
      </View>

    </View>
    
  )
}
const styles = StyleSheet.create({
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
    
    fontWeight:'bold',
    fontSize:30,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    height: '100%',
    padding: 30,
    
  },
  imgContainer:{
     
    alignItems: 'center',
    margin:60,
    width: '100%',
    height:'10%',
    // backgroundColor: 'red',
  },
  buttonContainer:{
    margin:50,
  },
  
  button: {
    marginBottom: 30,
    width: '100%',
    // height: '49%',
    alignItems: 'center',
    borderRadius:8,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    fontSize:40,
  fontWeight: 'bold',
    

  },
})
export default Landing
