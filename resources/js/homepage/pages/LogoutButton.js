import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';


function LogoutButton() {

    const navigate = useNavigate()

    const { setUser } = useContext(UserContext)

    const handleLogout = async (e) => {
        e.preventDefault()
        await axios.post('/logout');

        setUser(null)
        return navigate('/')

    }


    return (
        <div>
            <form onSubmit={handleLogout} >
                <div className='login-box'>
                    <div className='sub-main'>
                        <div>
                            <div className='user-box'>
                                <h1>Logout</h1>
                                <div className='reg-link'>
                                    <h2>Are you Logout !!!</h2>
                                </div>
                                <div>
                                    <button>Logout</button>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LogoutButton
