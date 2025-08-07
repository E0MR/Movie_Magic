import './Navbar.css'

import { Link } from 'react-router-dom'
function Navbar() {
  return ( 
    <>
      <nav className='leftUl'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
        <ul className='rightUl'>
          <li>
            <Link to='/login'>LogIn</Link>
          </li>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
        </ul>
      </nav>
    </> 
    ) 
  
} 

export default Navbar