import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    language: "en",
    theme: true, // dark
    isLoading: false,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state) => {
      state.theme = !state.theme;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Export actions
export const { setLanguage, setTheme,  setLoading } = appSlice.actions;

// Export reducer
export default appSlice.reducer;
