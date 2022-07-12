

import './NavbarStyle.css';
import { Link } from 'react-router-dom';




function NavBar() {
  return (
   <nav>
        <div>SEIZE THE DAY</div>
        
        <div className='login-btn'>
         <Link to='/home'>
            Home
         </Link>
         </div>
        <div className='login-btn'>
        <Link to='/login'>
            Login
        </Link>
       </div>
        <div className='login-btn'>
        <Link to='/registration'>
            Register
        </Link>
        
       </div>
       
   </nav>
  );
}

export default NavBar;