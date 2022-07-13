
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
/* import mail from "/images/email.png";
import lock from "/images/lock.png";
import profile from "/images/icon.jpg"; */


function Login() {

    const LOCAL_STORAGE_KEY = "Info";
    const navigate = useNavigate();

    const [Info, setInfo] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setInfo(retriveContacts);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info))
    }, [Info])

    const login = async (e) => {
        e.preventDefault()

        if (!Info.email || !Info.password) {
            return alert("Complete all the fields!!!")
        }

        const response = await axios.post('/login', Info)
        console.log(response.data);

        const data = await axios.get('/api/user')
        console.log(data.data);

        const response_data = setUser(data.data);
        console.log(response_data);

        setUser(data.data);
        return navigate('/user');
    }


    return (
        <form onSubmit={login} >
            <div className='login-box'>
                <div className='sub-main'>
                    <div>
                        <div className='user-box'>
                            <h1>Login</h1>
                            <div className='mail-id'>
                                {/* <img src={mail} alt="emial" className='email' /> */}
                                <input type="email" placeholder='Enter Email' className='fill' autoComplete='off' value={Info.email} onChange={(e) => setInfo({ ...Info, email: e.target.value })} />
                            </div>
                            <div className='mail-id'>
                                {/* <img src={lock} alt="emial" className='email' /> */}
                                <input type="password" placeholder='Enter New Password' className='fill' autoComplete='off' value={Info.password} onChange={(e) => setInfo({ ...Info, password: e.target.value })} />
                            </div>
                            <div>
                                <button >Submit</button>
                            </div>


                            <div className='btn'>
                                <p>If Account exist then</p><Link className='link' to='/registration'><a>Register!!!</a></Link>
                                <br />

                            </div>
                            <Link className='mn-link' to='/Logout'><a>!!Logout!!!</a></Link>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login