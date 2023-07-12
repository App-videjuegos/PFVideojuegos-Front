import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating';

const Card = ({image, name}) => {

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
        <Image style={styles.image} source={{ uri: videogames[0].image }} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{videogames[0].name}</Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={videogames[0].rating}
          starSize={20}
          fullStarColor="gold"
          emptyStarColor="gold"
        />
        <Text style={styles.price}>{videogames[0].price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#987BDC',
  },
  imageContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Card;