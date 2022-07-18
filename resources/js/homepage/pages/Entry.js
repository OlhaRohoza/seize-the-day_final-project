import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';

export function Entry() {
    const [entry,setEntry] = useState({
        
        date:"",
        rate: "0",
        note: "",
        picture: "",


    });

    const navigate = useNavigate()

    const Save_entrie = async (e) =>{
        e.preventDefault()
        // if (!entry.date || !entry.rate || !entry.note) {
        //     console.log(entry)
        //     alert("Complete all the fields!!!")
        //     return
        // }
        const response = await axios.post('/user/day', entry)
        // console.log(response.data)
        navigate('/user/day/'+entry.date)
    }
    // console.log(entry)
    

    return (
        <>
            <div >
                <form className="entry" onSubmit={Save_entrie} >
                    
                    <input type='date' name='date' value={entry.date} onChange={(e) => setEntry({ ...entry, date: e.target.value })} />
                    <label>Rate your day from 0 to 10:</label>
                    <input type='number' name='rate' defaultValue={0} onChange={(e) => setEntry({ ...entry, rate: e.target.value })} />
                    <textarea type='note' name='note' style={{ height: '400px' }} placeholder="Here you can add a note about your day, some ideas and insights, who you are grateful for something..."  value={entry.note}onChange={(e) => setEntry({ ...entry, note: e.target.value })} />
                    <input type='text' name='picture' value={entry.picture} onChange={(e) => setEntry({ ...entry, picture: e.target.value })} />
                    <button>Save</button>
                </form>

            </div>

        </>

    )
}