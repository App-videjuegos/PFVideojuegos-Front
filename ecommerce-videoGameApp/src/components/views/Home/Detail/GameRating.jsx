import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";
import { StyleSheet } from "react-native";

// json de videojuegos
const GameRating = ({ gameId, actualRating }) => {
  const videoGamesData = [
    {
      gameId: 1,
      score: 4.5,
      actualRating: 4.5,
    },
    {
      gameId: 2,
      score: 4.8,
      actualRating: 4.8,
    },
    {
      gameId: 3,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 4,
      score: 4.7,
      actualRating: 4.7,
    },
    {
      gameId: 5,
      score: 4.6,
      actualRating: 4.6,
    },
    {
      gameId: 6,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 7,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 8,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 10,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 4100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 4200,
      score: 4.9,
      actualRating: 4.9,
    },

    {
      gameId: 5100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 6100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 7100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 8100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 9100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 10100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 11100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 12100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 13100,
      score: 4.9,
      actualRating: 4.9,
    },
    {
      gameId: 14100,
      score: 4.9,
      actualRating: 4.9,
    },
  ];

  const [rating, setRating] = useState(
    videoGamesData.find((game) => game.id === gameId)?.rating || actualRating
  ); // aca se puede poner el rating del videojuego en la base de datos

  const handleRatingChange = async (newRating) => {
    try {
      const response = await axios.put(
        "https://pfvideojuegos-back-production.up.railway.app/games/update-rating",
        {
          gameId: gameId,
          score: newRating,
          actualRating: newRating,
        }
      );

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

      <TouchableOpacity onPress={() => handleRatingChange(0)}>
        <Text>Reset Rating</Text>
      </TouchableOpacity>
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
