import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Loading.gif")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        width: 100, // Ajusta el ancho del GIF
        height: 100, // Ajusta la altura del GIF
      },
});

export default Loading;
