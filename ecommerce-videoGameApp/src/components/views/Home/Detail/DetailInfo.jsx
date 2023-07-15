import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { AirbnbRating } from 'react-native-ratings';
const DetailInfo = (props) => {

  const [ratingV, setRating] = useState(0);
  const { name, description, price, rating, image } = props.propInfo;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleRating = (value) => {
    setRating(value);
    // console.log('Valor puntuado:', value);
  };
  const putRating = () => {
    
    alert(`el valor puntuado ${ratingV} se guardara`)
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // const RatingStars = ({ rating }) => {
  //   const filledStars = Math.floor(rating);
  //   const hasHalfStar = rating - filledStars >= 0.5;

  //   const renderStars = () => {
  //     const stars = [];

  //     // Render estrellas llenas
  //     for (let i = 0; i < filledStars; i++) {
  //       stars.push(<Star key={i} filled />);
  //     }

  //     // Render media estrella
  //     if (hasHalfStar) {
  //       stars.push(<Star key="half" half />);
  //     }

  //     // Render estrellas vacías restantes
  //     for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
  //       stars.push(<Star key={i} />);
  //     }

  //     return stars;
  //   };

  //   return <View style={styles.ratingContainer}>{renderStars()}</View>;
  // };

  // const Star = ({ filled, half }) => (
  //   <View style={styles.starContainer}>
  //     <Text>{half ? "★" : filled ? "★" : "☆"}</Text>
  //   </View>
  // );


  // onFinishRating={handleRating}


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.gameName}>{name}</Text>
      <View style={styles.ratingContainer}>
        {/* <RatingStars rating={4.5} /> */}
        <AirbnbRating
            count={5} // Cantidad de íconos de clasificación a mostrar
            defaultRating={rating} // Valor de clasificación predeterminado
            size={20} // Tamaño de los íconos de clasificación
            showRating={false}
            selectedColor="gold"
            onFinishRating={handleRating}
            // isDisabled={true}
          />
          <Text style={styles.textRating} onPress={() => putRating()}>Puntuar </Text>
          <Text>Valor puntuado: {ratingV}</Text>
          {/* <Text style={styles.textRating}>Save Rating</Text> */}
      </View>
      <Text style={styles.gamePrice}>$ {price}</Text>
      <Button
        title="Add to Car"
        onPress={() => console.log("Añadir al carrito")}
      />
      <Text style={styles.gameDescription}>
        {showFullDescription
          ? description
          : `${description.substring(0, 300)}...`}
      </Text>
      {!showFullDescription && (
        <Button title="Read More" onPress={toggleDescription} />
      )}
      <View style={styles.commentsContainer}>
        {/* Aca van los comentarios */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    alignContent:'center',
    
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 380,
    height: 250,
    // borderRadius: 10,
    marginLeft: -7,
    position: 'relative',
    alignContent:'center',
    resizeMode: "cover",
    alignSelf:'center',
    
  },
  gameName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    // alignContent:'space-around',
    marginBottom: 10,
    padding:5,
  },
  starContainer: {
    marginRight: 2,
  },
  gamePrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gameDescription: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "justify",
    marginBottom: 10,
  },
  commentsContainer: {
    // Estilos para la sección de comentarios
  },
  textRating:{
    fontSize:20,
    fontWeight:'bold',
    color:'#496BFF',
    paddingLeft:20,
  }
});

export default DetailInfo;
