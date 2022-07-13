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
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default LogoutButton
