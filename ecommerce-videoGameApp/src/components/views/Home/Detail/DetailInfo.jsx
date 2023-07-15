import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from "react-native";

const DetailInfo = (props) => {
  const { name, description, price, stock, image } = props.propInfo;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const RatingStars = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;

    const renderStars = () => {
      const stars = [];

      // Render estrellas llenas
      for (let i = 0; i < filledStars; i++) {
        stars.push(<Star key={i} filled />);
      }

      // Render media estrella
      if (hasHalfStar) {
        stars.push(<Star key="half" half />);
      }

      // Render estrellas vacías restantes
      for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars.push(<Star key={i} />);
      }

      return stars;
    };

    return <View style={styles.ratingContainer}>{renderStars()}</View>;
  };

  const Star = ({ filled, half }) => (
    <View style={styles.starContainer}>
      <Text>{half ? "★" : filled ? "★" : "☆"}</Text>
    </View>
  );

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.gameName}>{name}</Text>
      <View style={styles.ratingContainer}>
        <RatingStars rating={4.5} />
      </View>
      <Text style={styles.gamePrice}>${price}</Text>
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
    backgroundColor: "#fff",
    padding: 10,
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
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  gameName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
});

export default DetailInfo;
