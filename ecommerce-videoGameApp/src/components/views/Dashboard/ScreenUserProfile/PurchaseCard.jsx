import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const PurchaseCard = ({ videoG }) => {
  const videoGames = useSelector((state) => state.videogamesState.videoGames);

  const actualgame =
    videoGames && videoGames.filter((i) => i.id == videoG.items[0].videogameId);

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: actualgame[0].image }} style={styles.image} />
      <Text style={styles.gameName}>{actualgame[0].name}</Text>
      <Text style={styles.rating}>Rating:{actualgame[0].rating}</Text>
      <Text style={styles.price}>Price: ${actualgame[0].price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "cover",
    marginBottom: 8,
  },
  gameName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    marginBottom: 8,
  },
  addToCartButton: {
    fontSize: 16,
    color: "#007BFF",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 4,
    padding: 8,
  },
});

export default PurchaseCard;
