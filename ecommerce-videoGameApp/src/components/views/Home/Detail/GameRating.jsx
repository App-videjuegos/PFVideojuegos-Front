import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";
import { StyleSheet } from "react-native";

const GameRating = ({ gameId, initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = async (newRating) => {
    try {
      const response = await axios.put("http://localhost:5432/games/update-rating", {
        gameId: gameId,
        score: newRating,
        actualRating: rating,
      });

      console.log("Respuesta del servidor de calificación:", response.data);

      // Aquí puedes hacer algo con la respuesta del servidor, si es necesario

      setRating(newRating); // Actualizar el estado local con la nueva calificación

    } catch (error) {
      console.error("Error al actualizar el rating del videojuego:", error);
      // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
    }
  };

  return (
    <View>
      <Text>Rating: {rating}</Text>
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={20}
        showRating={false}
        selectedColor="gold"
        onFinishRating={handleRatingChange}
      />
      <Text style={styles.ratingText}>({rating.toFixed(1)})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GameRating;

