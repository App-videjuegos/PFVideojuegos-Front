import { View, Text, Image, StyleSheet,TouchableOpacity ,ActivityIndicator} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating';
import dataVideojuegos from '../dataVideojuegos'

const Card = (props) => {
//  console.log("propr",props)
  const {videoG, nav} = props;
  
  const videogames=[{
    "id": 3498,
    "name": "Grand Theft Auto V",
    "descripcion": "",
    "price": '$30',
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


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() =>nav.navigate('Detail', {props: videogames[0]  })}> 
        <Image 
            style={styles.image} 
            source={{ uri: videoG.image }} 
            PlaceholderContent={<ActivityIndicator color={'#FFFFFF'} size={"large"}/>}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
          <Text style={styles.name}>{videoG.name}</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={videoG.rating}
            starSize={20}
            fullStarColor="gold"
            emptyStarColor="gold"
            
          />
        <Text style={styles.price}>{videoG.price}</Text>
        
        <TouchableOpacity onPress={() =>nav.navigate('Detail', {props: videoG })}> 
                <Text style={styles.detail} >Ver Detalle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    flexDirection:'row',
    justifyContent:'space-around',
    width: '93%',   
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    // shadowColor: 'black',
    shadowOpacity: 0.23,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: '#987BDC',
  },
  imageContainer: {
    alignItems: 'center',
    // flex:1
     width: '45%',
      // height: '100%',
    // marginRight: 10 , 
    marginLeft:5,
    // backgroundColor:'blue
  },
  image: {
    marginTop:10,
    marginBottom:10,
    // marginLeft: -10,
    width: 120,
    height: 140,
    borderRadius:8,   
    // alignSelf:'center',
    alignContent:'center',
    resizeMode: 'cover',
  },
  detailsContainer: {
    width: '50%',
    // height:'100%',
    // alignContent:'center',
    alignItems:'center',
  },
  name: {
    fontSize:15 ,
    alignContent:'center',
    alignItems:'center',
    textAlign:'center',
    verticalAlign:'middle',
    fontWeight: 'bold',
    height: 37,
  },
  rating: {
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
    height:25,
    color :'white',
  },
  detail:{
    fontSize: 15,
    textAlign:'center',
  }
});

export default Card;