import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    name: "User Zero",
    email: "user0@example.com",
    username: "user0",
    password: "67890",
    confirmPassword: "67890",
    birthDate: "1995-05-05",
  },
  {
    name: "User One",
    email: "user1@example.com",
    username: "user1",
    password: "12345",
    confirmPassword: "12345",
    birthDate: "2000-01-01",
  },
];

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    login: (state, action) => {
      state.error = null;
      const { username, password } = action.payload;
      const existingUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (existingUser) {
        state.user = { ...existingUser };
        state.error = null;
      } else {
        state.user = null;
        state.error = "Invalid username or password!";
      }
    },

    signup: (state, action) => {
      state.error = null;
      const { name, email, username, password, confirmPassword, birthDate } =
        action.payload;
      const userExists = users.some((u) => u.username === username);

      if (userExists) {
        state.error = "Username already taken!";
      } else {
        const newUser = {
          name,
          email,
          username,
          password,
          confirmPassword,
          birthDate,
        };
        users.push(newUser);
        state.user = { ...newUser };
        state.error = null;
      }
    },

    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { signup, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
