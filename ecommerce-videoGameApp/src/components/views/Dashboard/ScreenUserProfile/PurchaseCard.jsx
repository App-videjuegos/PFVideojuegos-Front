import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const PurchaseCard = ({ videoG }) => {
  const videoGames = useSelector((state) => state.videogamesState.videoGames);

  const actualgame =
    videoGames && videoGames.filter((i) => i.id == videoG.items[0].videogameId);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: actualgame[0].image }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>N° Order:</Text> {actualgame[0].id}
        </Text>
        <Text style={styles.infoText}>
          Quantity Items: {videoG.items[0].quantity}
        </Text>
        <Text style={styles.infoText}>Videogames: {actualgame[0].name}</Text>
        <Text style={styles.infoText}>Date: {videoG.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF", // Color de fondo BLANCO
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000", // sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  leftContainer: {
    marginRight: 16,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  infoText: {
    fontFamily: "Roboto", // Font family
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 14.52,
    marginBottom: 8,
    color: "#606060", // Color gris
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default PurchaseCard;
