import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {


    toggleFavoriteSuccess: (state, action) => {
      const { videogameId, isFav } = action.payload;
      // Actualizamos el estado local con la información del juego favorito
      state.favorites[videogameId] = isFav;
    },
    setFavorites: (state, action) => {
        state.favorites = action.payload;
      },


  },
});

export const { toggleFavoriteSuccess, setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;