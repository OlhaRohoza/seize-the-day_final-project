import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const EntryListElement = ({ element, setMessage }) => {
    const [formData, setFormData] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {

        setFormData({ ...element });

    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleUpdate = async () => {
        const res = await axios.put('/user/day/' + element.id, formData)
        console.log(res.data);
        setOpenEdit(false);
        setMessage(res.data.message);
        setTimeout(() => {
            setMessage(false)
        }, 3000);
        navigate('/user/day/' + element.date)

    }

    const handleDelete = async () => {
        console.log(element.id);
        const res = await axios.delete('/user/day/' + element.id);
        setMessage(res.data.message);
        setTimeout(() => {
            setMessage(false)
        }, 3000);
        // alert("The Entry has been deleted");
        navigate('/user/day/' + element.date);
    }
    //    const refreshPage = async () => {
    //         window.location.reload(true)
    //       }    

    // console.log(element.images[0].path);



    return (
        <div className="Entry--day-display">
            <div className="entry--day-part">
                <h4 style={{ paddingBottom: '5px' }}>Rate of the day: </h4>
                {
                    openEdit
                        ? <Fragment>
                            <input name="rate" value={formData.rate || ''} onChange={handleChange} />
                        </Fragment>
                        : element.rate
                }
            </div>
            <br />
            <div className="entry--day-part">
                <h4 style={{ paddingBottom: '5px' }}>Note of the day: </h4>
                {
                    openEdit
                        ? <Fragment>
                            <textarea name="note" value={formData.note || ''} onChange={handleChange} style={{ height: '400px' }} />
                        </Fragment> : element.note
                }
            </div>

            <div className="Entry--day-part">
                {element.images ? element.images.map(image => (
                    <img src={image.path} alt="entry-image" key={image.id} />
                )) : ''}
            </div>

            <div className="Entry--day-part" style={{ marginTop: '2em' }}>
                {
                    openEdit
                        ? <button onClick={() => handleUpdate()} >Submit</button>
                        : <><button onClick={() => setOpenEdit(true)} >Edit this Entry</button> <button onClick={handleDelete} >Delete this Entry</button></>
                }
            </div>
        </div >
    )
}
export default EntryListElement