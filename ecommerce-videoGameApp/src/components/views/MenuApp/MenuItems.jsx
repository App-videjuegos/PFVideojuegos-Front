import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'

import MenuBottonItem from './MenuButton'
import { DrawerContentScrollView, } from '@react-navigation/drawer';

const MenuItems=({navigation})=>{





    return(
      <DrawerContentScrollView 
      // style={{backgroundColor:StringsDark.bktitle}}
      >
          <View 
          // style={{backgroundColor:StringsDark.cabmenu}}
          >

   
             <View style={styles.cabeceraimg}>
                  <Image 
                  source={require('../../../../assets/icon.png')}
                  
                  style={styles.imgmenu}
                  /> 
                 
                
            </View> 
            <View style={styles.cabeceraText}>
                  <Text style={[styles.textoUsr,
                    // {color:StringsDark.bktitle}
                    ]}>
                  
                  </Text>
                 
            </View>
            <View style={[styles.separator]}>
  
          </View>
        </View>
          <MenuBottonItem
            nombre= {'Landing'}
            onPress={()=> navigation.navigate('Landing')}
            icon='airplane'
          />
          <MenuBottonItem
            nombre= {'Home'}
            onPress={()=> navigation.navigate('HomeStack')}
            icon='home'
          />
          <MenuBottonItem
            nombre= {'Shopping Cart'}
            onPress={()=> navigation.navigate('Cart')}
            icon='cart'
          />
                   
      </DrawerContentScrollView>
    )
  }
  
  const styles = StyleSheet.create({
 
    cabeceraimg:{
      flexDirection: 'row',
      // alignContent: 'space-between',
      alignItems: 'center',
      alignContent: 'space-around'
      
    },
    imgmenu: {
      marginLeft:20,
      padding:20,
      width: 120,
      height: 80,
      // justifyContent: '',
      
      resizeMode:'contain'
    },
    icon: {
      marginLeft:70,
      width: 50,
      height: 50,
      // alignContent: 'flex-end',
      // alignItems: '',
      resizeMode:'contain',
      borderRadius:100
  
    },
    cabeceraText:{
      alignContent: 'center',
      alignItems:'center',
      
    },
    btnIngresa:{
      margin:3,
      width: 150,
      height: 40,
      // backgroundColor: color_blanco,
      borderRadius: 10,
      // color: color_crema,
      fontWeight:'bold',
      fontSize: 22,
      textAlign: 'center',
    },
    textoUsr:{
      fontSize:13,
      // color:color_blanco,
    },
   
    separator: {
      // marginVertical: 30,
      // height: 0,
    width: '100%',
      marginTop:5,
      // borderColor:color_negro,
      borderWidth:2,
      // color: color_negro,
    },
  
    
  
   
  });
export default MenuItems