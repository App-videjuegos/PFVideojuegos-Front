import { View, Text,TouchableOpacity,StyleSheet, ScrollView } from 'react-native'

import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

import {getvideoGames } from "../../../redux/videogamesActions"

//Importamos componentes
import Card from '../../utils/Card/Card'


const videogames=[{
  "id": 3498,
  "name": "Grand Theft Auto V",
  "descripcion": "",
  "platforms": [
    "PlayStation 5",
    "Xbox Series S/X",
    "PlayStation 4",
    "PC",
    "PlayStation 3",
    "Xbox 360",
    "Xbox One"
  ],
  "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  "released": "2013-09-17",
  "rating": 4.47,
  "genre": [
    "Action",
    "Adventure"
  ],
  "screenShots": [
    "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
    "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
    "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
    "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
    "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
    "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
  ],
  "tiendas": [
    "PlayStation Store",
    "Epic Games",
    "Steam",
    "Xbox 360 Store",
    "Xbox Store"
  ],
  "etiquetas": [
    "Singleplayer",
    "Steam Achievements",
    "Multiplayer",
    "Full controller support",
    "Atmospheric",
    "Great Soundtrack",
    "RPG",
    "Co-op",
    "Open World",
    "cooperative",
    "First-Person",
    "Third Person",
    "Funny",
    "Sandbox",
    "Comedy",
    "Third-Person Shooter",
    "Moddable",
    "Crime",
    "vr mod"
  ],
  "create": false
}]

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