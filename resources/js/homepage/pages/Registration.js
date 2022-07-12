import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
/* import mail from "./images/email.png"; */



 function Registration() {
    
    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        
    });

    const register = async (e) =>{
        e.preventDefault()
        
        if (!Info.name || !Info.email || !Info.password  || !Info.password_confirmation ) {
            console.log(Info)
            alert("Complete all the fields!!!")
            return
        }


        const response = await axios.post('/register', Info)
        console.log(response.data)
    }
    console.log(Info);

    return (
        <form onSubmit={register} >
            <div className='login-box'>
                <div className='sub-main'>
                    <div>
                        <div className='user-box'>
                            <h1>Registration</h1>
                            <div>
                                
                                <input type="text" placeholder='Enter Name' className='fill' value={Info.name} onChange={(e) => setInfo({...Info, name: e.target.value})}/>
                            </div>
                            <div >
                                
                                <input type="email" placeholder='Enter Email-id' className='fill' value={Info.email} onChange={(e) => setInfo({...Info, email: e.target.value})}/>
                            </div>
                            <div>
                                {/* <img src={lock} alt="emial" className='email' /> */}
                                <input type="password" placeholder='Enter New Password' className='fill' value={Info.password} onChange={(e) => setInfo({...Info, password: e.target.value})}/>
                            </div>
                            <div>
                                {/* <img src={lock} alt="emial" className='email' /> */}
                                <input type="password" placeholder='Confirm Password' className='fill' value={Info.password_confirmation } onChange={(e) => setInfo({...Info, password_confirmation : e.target.value})}/>
                            </div>
                            <div className='btn'>
                            <button>Submit</button>
                            <p>If Account exist then</p><Link className='link' to='/login'><a>Login!!!</a></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration