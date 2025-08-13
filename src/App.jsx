import { BrowserRouter,
Routes, 
Route, 
Link } from 'react-router-dom';

import './App.css'
import Home from './pages/home/Home'
import Favorites from './pages/favorites/Favorites'
import LogIn from './pages/logIn/LogIn'
import SignUp from './pages/signUp/SignUp'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import GoTop from './components/goTop/GoTop'
import Settings from './components/settings/Settings'

function App() {
  return (
    <>
      <GoTop />
      <Settings />
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App