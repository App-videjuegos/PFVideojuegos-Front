import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React from "react";
// import StarRating from "react-native-star-rating";
import { AirbnbRating } from "react-native-ratings";
import { InsertarItem } from "../../forms/Cart/CardCartController";
import { updateCart } from "../../../redux/cartSlice";
import { useDispatch, useSelector  } from "react-redux";
import GameRating from "../../views/Home/Detail/GameRating";
import { useState, useRef, useEffect ,useContext  } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable"; // Importamos la librería para las animaciones
import {
  color_blanco,
  color_gris_c,
  color_morado_o,
} from "../theme/stringsColors";
import { color } from "react-native-reanimated";
import { toggleFavorite } from "../../../redux/favoriteActions";
//linea para modificar el contexto de localizacion para el lenaguje
import { LanguajeContext } from "../../utils/languaje/languajeProvider";
const Card = (props) => {
  const { videoG, nav, showButtons = true } = props;



  {
    /* Botón de favoritos -> NO BORRAR COMENTARIOS POR EL AMOR DE DIOS. */
  }
  const [isFavorite, setIsFavorite] = useState(false); // Estado para controlar si el juego es favorito o no
  const heartRef = useRef(null); // Referencia para la animación del corazón
  const cartRef = useRef(null); // Referencia para la animación del corazón
  const isLogged = useSelector((state) => state.usersState.isLogged);
 // Obtener la lista de favoritos del estado global
 const favorites = useSelector((state) => state.favoriteState.favorites);
 const { StringsLanguaje, locale } = useContext(LanguajeContext);
 // Verificar si el juego actual está en la lista de favoritos
 useEffect(() => {
   const favoriteGameIds = favorites.map((favorite) => favorite.videogameId);
   const isFav = favoriteGameIds.includes(videoG.id);
   setIsFavorite(isFav);
 }, [favorites, videoG.id]);


  const handleToggleFavorite = () => {
    if (isLogged.id === undefined) {
      // Mostrar una alerta si el usuario no está logueado
      Alert.alert("Login Required", "Please log in to add this game to favorites.");
      console.log("No se puede agregar a favoritos: Usuario no logueado.");
      return;
    }

    setIsFavorite((prevState) => !prevState); // Cambiar el estado de favorito
    heartRef.current?.rubberBand(500);
    console.log("Agrego a favorito:", !isFavorite);
    console.log("ID del juego:", videoG.id);
    console.log("ID del usuario:", isLogged.id);

    // Enviar información a la API para agregar/quitar el juego de favoritos
    const data = {
      videogameId: videoG.id,
      userId: isLogged.id,
      isFav: !isFavorite,
    };
    dispatch(toggleFavorite(data.videogameId, data.userId, data.isFav));
  };


  {
    /* Botón de favoritos -> NO BORRAR COMENTARIOS POR EL AMOR DE DIOS. */
  }

  const dispatch = useDispatch();
  // Función para actualizar el rating del videojuego en la tarjeta inicial (Home)
  const [videoGames, setVideoGames] = useState([]);
  //PARSEANDO OBJETO PARA AGREGAR AL CARRITO
  let objeto = {
    id: videoG.id,
    title: videoG.name,
    price: videoG.price,
    img: videoG.image,
    stock: videoG.stock,
    amount: Number(1),
  };
  const objString = JSON.stringify(objeto);

  const key = "cart" + videoG.id;
  // console.log("generado clave cart",key)

  // Función para actualizar el rating del videojuego en la tarjeta inicial (Home)
  const updateCardRating = (newRating) => {
    const updatedVideoGames = videoGames.map((videoGame) => {
      if (videoGame.id === videoG.id) {
        return { ...videoGame, rating: newRating };
      } else {
        return videoGame;
      }
    });
    setVideoGames(updatedVideoGames);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          {/* Imagen del videojuego */}
          <TouchableOpacity
            onPress={() => nav.navigate("Detail", { videoGames: videoG })}

>
            <Image
              style={styles.image}
              source={{ uri: videoG.image }}
              PlaceholderContent={
                <ActivityIndicator color={"#FFFFFF"} size={"large"} />
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          {/* Nombre del videojuego */}
          <Text style={styles.name}>{videoG.name}</Text>

          {/* Rating del videojuego */}
          <View style={styles.rating}>
            <AirbnbRating
              count={5}
              defaultRating={videoG.rating}
              size={20}
              showRating={false}
              selectedColor="gold"
              isDisabled={true}
            />
          </View>

        {/* Fila que contiene el precio y el corazón */}
        <View style={styles.priceAndFavoriteContainer}>
            {/* Precio del videojuego */}
            <Text style={styles.price}>$ {videoG.price}</Text>

            {/* Espacio entre el precio y el corazón */}
            <View style={styles.space} />

            {/* Botón de favoritos (si showButtons es verdadero) */}
            {showButtons && (
              <View style={styles.heart}>
                <TouchableOpacity onPress={handleToggleFavorite}>
                  <Animatable.View ref={heartRef}>
                    <MaterialCommunityIcons
                      style={styles.heartIcon}
                      name={isFavorite ? "heart" : "heart-outline"}
                      size={28}
                      color={isFavorite ? "#622EDA" : "#595959"}
                    />
                  </Animatable.View>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Botón "Add to cart" (si showButtons es verdadero) */}
          {showButtons && (
            <TouchableOpacity
              onPress={() => {
                InsertarItem(
                  key,
                  objString,
                  videoG.stock,
                  StringsLanguaje.AddingItem,
                  StringsLanguaje.Item_added,
                  StringsLanguaje.stockOut,
                  StringsLanguaje.warning,
                );
                dispatch(updateCart());
              }}
            >
              <Animatable.View ref={cartRef}>
                <MaterialCommunityIcons
                  style={styles.AddCartContainer}
                  name={"cart-plus"}
                  size={28}
                  color={color_gris_c}
                />
              </Animatable.View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceAndFavoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  container: {
    marginVertical: 8,
  },
  subContainer: {
    flexDirection: "row",

    width: 312,
    height: 138,
    // marginHorizontal: 10,
    borderRadius: 10,
    // shadowColor: 'black',
    shadowOpacity: 0.23,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "#987BDC",
  },

  imageContainer: {
    alignItems: "flex-start",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  image: {
    borderRadius: 5,
    width: 92,
    height: 112,
    resizeMode: "cover",
  },
  detailsContainer: {
    marginTop: 8,
    alignContent: "flex-start",
  },
  name: {
    fontSize: 16,
    marginTop: 4,
    textAlignVertical: "top",
    textAlign: "left",
    fontWeight: "bold",
    width: 120,
    height: 42,
    color: color_morado_o,
  },
  rating: {
    fontSize: 16,
  },
  heart: {
    elevation:10,
    position: "absolute",
    left: 150,
    bottom: 68,
    color: color_blanco,
  },
  AddCartContainer: {
    elevation:10,
    position: "absolute",
    left: 150,
    bottom: 24,
  },
  price: {
    marginTop: 4,
    fontSize: 26,
    textAlign: "left",
    justifyContent: "flex-start",
    fontWeight: "bold",
    height: 28,
    color: color_blanco,
  },
  addItemCar: {
    margin: 5,
    // marginLeft:10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    width: 110,
    // backgroundColor:'white'
  },
});

export default Card;
