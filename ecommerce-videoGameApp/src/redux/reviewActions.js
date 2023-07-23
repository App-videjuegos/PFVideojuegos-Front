import axios from "axios";
import { setLoading, setReviews, setError } from "./reviewSlice";

// Función para enviar comentarios a la base de datos
export const sendReview = (newComment) => {
  return async (dispatch) => {
    try {
      // Obtén el último ID de la ruta GET de reviews
      const response = await axios.get(
        "https://pfvideojuegos-back-production.up.railway.app/reviews"
      );

      // Encuentra el máximo ID en los comentarios recibidos desde el servidor
      const maxId = response.data.reduce(
        (max, comment) => (comment.id > max ? comment.id : max),
        0
      );

      // Asigna el nuevo ID al comentario sumando 1 al máximo ID
      newComment.id = maxId + 1;

      // Envía el nuevo comentario al servidor
      const sendResponse = await axios.post(
        "https://pfvideojuegos-back-production.up.railway.app/reviews",
        newComment
      );

      // Si el comentario se ha creado correctamente en el servidor, la respuesta contendrá el nuevo comentario con el ID asignado
      const createdComment = sendResponse.data;

      // Actualiza el estado "comments" con el nuevo comentario
      dispatch({ type: "ADD_COMMENT", comment: createdComment });

      // Manejo de éxito: muestra un mensaje de éxito en la consola o realiza cualquier otra acción que desees
      console.log("Comentario enviado exitosamente:", createdComment);
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
    }
  };
};

// Función para obtener comentarios por videogameId desde la base de datos
export const getReviewsByVideogameId = (videogameId) => {
  return async (dispatch) => {
    try {
      console.log("Obteniendo comentarios por videogameId:", videogameId);

      dispatch(setLoading(true));

      const response = await axios.get(
        "https://pfvideojuegos-back-production.up.railway.app/reviews"
      );

      const reviewsByVideogameId = response.data.filter(
        (comment) => comment.videogameId === videogameId
      );

      console.log(
        "Comentarios recibidos desde el servidor:",
        reviewsByVideogameId
      );

      dispatch(setReviews(reviewsByVideogameId));
      dispatch(setLoading(false));
    } catch (error) {
      console.log("Error al obtener comentarios:", error.message);
      dispatch(setError("Error al obtener comentarios"));
      dispatch(setLoading(false));
    }
  };
};

// Acción para agregar el comentario enviado al estado del store
const addReview = (review) => ({
  type: "ADD_REVIEW",
  payload: review,
});
