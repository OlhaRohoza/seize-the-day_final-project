import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import './Entryform.css';



export function Entry() {
    const [entry, setEntry] = useState({
        date:"",
        rate: "0",
        note: "",
    });
    const [image, setImage] = useState(null);

    const navigate = useNavigate()

    const save_entrie = async (e) =>{
        e.preventDefault()
        // if (!entry.date || !entry.rate || !entry.note) {
        //     console.log(entry)
        //     alert("Complete all the fields!!!")
        //     return
        // }
        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const form = new FormData();
        const value = JSON.stringify(entry)

        console.log(value)


        form.append("image", image);
        form.append("value", value);

        const response = await axios.post('/user/day', form, options)
        console.log(response.data)
        navigate('/user/day/' + entry.date)
    }

    return (
        <>
            <div className="wrap">
                 <h1>Entry form</h1>
                 <span >Select Date</span>
                 <span >Set Rate Of The Day</span>

                <form className="mainWrap" onSubmit={save_entrie} >
                    
                    <input className="name" type='date' name='date' value={entry.date} onChange={(e) => setEntry({ ...entry, date: e.target.value })} />
                    <input className="rate" type='number' name='rate' value={entry.rate} onChange={(e) => setEntry({ ...entry, rate: e.target.value })} />
                    <textarea className="mainArea" type='note' name='note' value={entry.note} style={{ height: '400px' }} placeholder="Here you can add a note about your day, some ideas and insights, who you are grateful for something..." onChange={(e) => setEntry({ ...entry, note: e.target.value })} />
                    <input className="bigBtn" type='file' name='image' multiple onChange={(e)=> setImage(e.target.files[0])} />
                    <button className="bigBtn">Save</button>

                </form>
                
            </div>

        </>

    )
}