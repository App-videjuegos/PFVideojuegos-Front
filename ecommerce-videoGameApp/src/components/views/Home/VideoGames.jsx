import { View, Text,TouchableOpacity,StyleSheet, FlatList } from 'react-native'

 import { useEffect,useState  } from 'react'
 import {useDispatch, useSelector} from "react-redux"

 import {getvideoGames } from "../../../redux/videogamesActions"

 //Importamos componentes
 import Card from '../../utils/Card/Card'




const VideoGames = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const vGames = useSelector((state) => state.videogamesState.videoGames);


  useEffect(() => {
    
    dispatch(getvideoGames());
  }, []);



  const renderItem = ({ item }) => (
    <Card
      key={item.id}
      videoG={item}
      nav={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vGames}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}

      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  enlace2: {
    justifyContent: 'space-between',
    // backgroundColor: color_blanco,
    alignItems: 'center',
      fontSize:25,
      
  
  },
});

export default VideoGames;