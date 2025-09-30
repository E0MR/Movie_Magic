import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import favReducer from "./favSlice";
import authReducer from "./authSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    fav: favReducer,
    auth: authReducer,
    modals: modalReducer,
  },
});

export default store;
