import { View, Text,TouchableOpacity,StyleSheet, ScrollView } from 'react-native'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getvideoGames } from "../../../redux/videogamesActions"
//Importamos componentes
import Card from '../../utils/Card/Card'

const VideoGames = ({ navigation, route }) => {

  const dispatch= useDispatch();
  const videoGames = useSelector((state) => state.videogamesState.videoGames);
  const filteredVideoGames = useSelector((state) => state.videogamesState.filteredVideoGames);


  useEffect(()=>{

    dispatch(getvideoGames()) ;

  },[])
  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
      {filteredVideoGames.length > 0
            ? filteredVideoGames.map((videoGame) => (
                <Card key={videoGame.id} videoG={videoGame} nav={navigation} />
              ))
            : videoGames.map((videoGame) => (
                <Card key={videoGame.id} videoG={videoGame} nav={navigation} />
              ))}
  </View>
  </ScrollView>

      {/* <TouchableOpacity onPress={() =>navigation.navigate('Detail', {props: videogames[0]  })}> 
                <Text style={styles.enlace2} >Enlace a ScreenDetalle</Text>
        </TouchableOpacity>
*/}
    </View> 
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor:'white',


  },
  enlace2: {
    justifyContent: 'space-between',
    // backgroundColor: color_blanco,
    alignItems: 'center',
      fontSize:25,


  },
})
export default VideoGames