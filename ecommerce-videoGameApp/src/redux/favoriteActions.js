import axios from "axios";
import { toggleFavoriteSuccess, setFavorites } from "./favoriteSlice"; // Asegúrate de importar la acción correcta

export const toggleFavorite = (userId, videogameId, isFav) => {
  return async (dispatch) => {
    try {
      const data = {
        userId,
        videogameId,
        isFav,
      };

      // Realizamos la petición POST a la API para agregar/quitar el juego de favoritos
      await axios.post("https://pfvideojuegos-back-production.up.railway.app/favorites", data);

      // Si la petición fue exitosa, actualizamos el estado local
      dispatch(toggleFavoriteSuccess(userId, videogameId, isFav)); // Utiliza la acción importada correctamente
    } catch (error) {
      // Manejo de errores
      console.error("Error al agregar/quitar favorito:", error);
    }
  };
};

export const toggleFavoriteSucces = (videogameId, isFav) => {
  return {
    type: "favorite/toggleFavoriteSuccess",
    payload: {
      videogameId,
      isFav,
    },
  };
};

export const fetchFavorites = (userId) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://pfvideojuegos-back-production.up.railway.app/favorites/${userId}`);
        const favorites = response.data; // Suponiendo que la API responde con un array de favoritos
        dispatch(setFavorites(favorites));
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    };
  };