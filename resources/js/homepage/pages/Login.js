
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './App.css';
/* import mail from "/images/email.png";
import lock from "/images/lock.png";
import profile from "/images/icon.jpg"; */


function Login() {
    
    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        email:"",
        password:""
    });

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setInfo(retriveContacts);
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info))
    },[Info])

    const login = (e) =>{
        e.preventDefault()

        if (!Info.email || !Info.password) {
            return alert("Complete all the fields!!!")
        }

        const res = ''

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
                                <input type="email" placeholder='Enter Email' className='fill' value={Info.email} onChange={(e) => setInfo({...Info, email: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                {/* <img src={lock} alt="emial" className='email' /> */}
                                <input type="password" placeholder='Enter New Password' className='fill' value={Info.password} onChange={(e) => setInfo({...Info, password: e.target.value})}/>
                            </div>
                            <div>
                                <button >Submit</button>
                            </div>
                          
                           
                            <div className='reg-link'>
                                <p>If Account exist then</p><Link className='link' to='/registration'><a>Register!!!</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login