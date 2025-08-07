import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
