import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GoTop from "./components/goTop/GoTop";
import Settings from "./components/settings/Settings";
import Movie from "./pages/movie/Movie";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Search from "./pages/search/Search";
import ModalStack from "./components/modalStack/ModalStack";
import Profile from "./pages/profile/Profile";

function App() {
  const theme = useSelector((state) => state.app.theme);

  return (
    <div className="main">
      {theme && (
        <input
          className="theme-checked"
          name="theme-checked"
          aria-label="theme-checked"
          type="checkbox"
          defaultChecked
        />
      )}
      <GoTop />
      <Settings />
      <BrowserRouter basename="/Movie_Magic">
        <ModalStack />

        <Navbar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
