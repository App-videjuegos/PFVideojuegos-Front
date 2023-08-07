import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorites } from "../../../../redux/favoriteActions";
import Card from "../../../utils/Card/Card";

const MyFavoriteGames = () => {
  const isLogged = useSelector((state) => state.usersState.isLogged);
  const favorites = useSelector((state) => state.favoriteState.favorites);
  const videoGames = useSelector((state) => state.videogamesState.videoGames);
  const dispatch = useDispatch();

  console.log("Favorites:", favorites);
  console.log(
    "Videogame ID:",
    videoGames.map((e) => e.name)
  );
  console.log("user ID:", isLogged.id);

  useEffect(() => {
    if (isLogged.id) {
      dispatch(fetchFavorites(isLogged.id));
    }
  }, [dispatch, isLogged.id]);

  const favoriteGameIds = useSelector((state) =>
    state.favoriteState.favorites.map((favorite) => favorite.videogameId)
  );

  const favoriteGames = videoGames.filter((game) =>
    favoriteGameIds.includes(game.id)
  );

  // Componente Card interno para reutilizar estilos
  const FavoriteCard = ({ videoG }) => {
    if (!videoG) {
      // Si el videojuego no existe, no renderizar nada
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: videoG.image }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{videoG.name}</Text>
          <Text style={styles.price}>$ {videoG.price}</Text>
          {/* Otros detalles que deseas mostrar del videojuego */}
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text>Mis Juegos Favoritos</Text>
      {/* Renderizar la lista de favoritos aquí */}
      <View style={styles.cardsContainer}>
        {favoriteGames.map((game) => (
          <Card key={game.id} videoG={game} showButtons={false} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center", // Centra las tarjetas horizontalmente
    paddingTop: 16,
    paddingBottom: 32,
  },
  cardsContainer: {
    alignItems: "center", // Centra las tarjetas horizontalmente
  },
  container: {
    // Estilos del contenedor de la tarjeta
    marginVertical: 8,
    flexDirection: "row",
    width: 312,
    height: 138,
    borderRadius: 10,
    shadowOpacity: 0.23,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "#987BDC",
  },
  imageContainer: {
    // Estilos del contenedor de la imagen
    alignItems: "flex-start",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  image: {
    // Estilos de la imagen
    borderRadius: 5,
    width: 92,
    height: 112,
    resizeMode: "cover",
  },
  detailsContainer: {
    // Estilos del contenedor de los detalles
    marginTop: 8,
    alignContent: "flex-start",
  },
  name: {
    // Estilos del nombre del videojuego
    fontSize: 16,
    marginTop: 4,
    textAlignVertical: "top",
    textAlign: "left",
    fontWeight: "bold",
    width: 120,
    height: 42,
    color: "#622EDA",
  },
  price: {
    // Estilos del precio del videojuego
    marginTop: 4,
    fontSize: 26,
    textAlign: "left",
    justifyContent: "flex-start",
    fontWeight: "bold",
    height: 28,
    color: "#FFFFFF",
  },
  // Otros estilos necesarios
});

export default MyFavoriteGames;