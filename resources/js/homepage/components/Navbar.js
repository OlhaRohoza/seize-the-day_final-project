import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { useContext } from 'react';
import LogoutButton from '../pages/LogoutButton';

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  return (
    <nav className='navigation'>
      <div className='login-btn'>
        <Link to='/'>
          Home
        </Link>
      </div>
      <div className='logo'><h3 className='logo-anim'>SEIZE THE DAY</h3> </div>
      <div className='link'>
        {
          user ? (
            <>
              <p><strong> {user.name}</strong></p>
              <LogoutButton />
            </>
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