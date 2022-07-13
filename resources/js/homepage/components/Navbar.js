

import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { useContext } from 'react';
import LogoutButton from '../pages/LogoutButton';




function NavBar() {
  const { user, setUser } = useContext(UserContext);
  return (
    <nav>
      <div className='logo'><h1 className='logo-anim'>SEIZE THE DAY</h1> </div>
      <div className='link'>

        <div className='login-btn'>
          <Link to='/'>
            Home
          </Link>
        </div>
        {
          user ? (
            <LogoutButton />
          )
            : (
              <>

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

              </>

            )

        }


      </div>

    </nav>
  );
}

export default NavBar;