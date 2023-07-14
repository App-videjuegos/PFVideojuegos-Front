import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import React from "react";

const DetailInfo = (props) => {
  //console.log("estoy en detail info1111:", props.propInfo);
  const { name, description, price, stock, image } = props.propInfo;
  return (
    <View style={styles.container}>
      <Text style={styles.gameName}>{name}</Text>
      <Text style={styles.gameDescription}>{description}</Text>
      <Text>{price}</Text>
      <Text>{stock}</Text>
      {/* <Image>{image}</Image> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  image: {
    width: 100,
  },
  gameName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gameDescription: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "justify",
  },
});

export default DetailInfo;
