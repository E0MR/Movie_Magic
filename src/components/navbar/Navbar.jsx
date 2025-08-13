import './Navbar.css';

import logo from '../../assets/images/logo.png';

import { NavLink, Link } from 'react-router-dom';
function Navbar() {
  return ( 
    <>
      <nav>
        <Link to='/'>
          <img className='logo' src={logo} alt='Logo'/>
        </Link>
        
        <ul className='leftUl'>
          <li>
            <NavLink to='/' data-title='Home' className={({ isActive }) => isActive ? "active" : ""}><hr /></NavLink>
          </li>
          <li>
            <NavLink to='/favorites' data-title='Favorites' className={({ isActive }) => isActive ? "active" : ""}><hr /></NavLink>
          </li>
        </ul>
        
        <input className='search' type='search' placeholder='Search...' />
        
        <ul className='rightUl'>
          <li>
            <NavLink to='/login' data-title='LogIn' className={({ isActive }) => isActive ? "active" : ""}><hr /></NavLink>
          </li>
          <li>
            <NavLink to='/signup' data-title='SignUp' className={({ isActive }) => isActive ? "active" : ""}><hr /></NavLink>
          </li>
        </ul>
      </nav>
    </> 
    ) 
  
} 

export default Navbar