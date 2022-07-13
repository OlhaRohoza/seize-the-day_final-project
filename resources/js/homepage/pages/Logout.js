import React from 'react';
import axios from 'axios';


function Logout() {
    localStorage.clear();
    window.location.href='/';
    const response =  axios.post('/logout');

   
    
   return (
    <div>
        <form onSubmit={Logout} >
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

export default Logout
