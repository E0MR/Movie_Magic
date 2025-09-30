import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav", // favourites
  initialState: {
    favourites: [],
  },
  reducers: {
    toggleFav: (state, action) => {
      // const index = state.favourites.findIndex(obj => JSON.stringify(obj) === JSON.stringify(action.payload));
      const movie = action.payload;
      const index = state.favourites.findIndex(m => m.id === movie.id);
      if (index > -1) {
        state.favourites.splice(index, 1);
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

// Export actions
export const { toggleFav } = favSlice.actions;

// Export reducer
export default favSlice.reducer;