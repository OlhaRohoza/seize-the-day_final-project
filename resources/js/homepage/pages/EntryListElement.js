import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';


const EntryListElement = ({element}) => {
    const [formData, setFormData] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
  
    useEffect(() => {
  
        setFormData({ ...element });
  
    }, [])
 
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleUpdate = async () => {
        const res = await axios.put('/user/day/' + element.id, formData)
        console.log(res.data)
        setOpenEdit(true)
    }


    return (
        <tr>
            <td>
                {
                openEdit ? <Fragment>
                    note: 
                    <input name="note" value={formData.note || ''} onChange={handleChange} />
                </Fragment> : element.note
                }
            </td>
            <td>
                
                {
                openEdit ? <Fragment>
                    rate: 
                    <input name="rate" value={formData.rate || ''} onChange={handleChange} />
                </Fragment> : element.rate
                }
            </td>
            <td>
                {
                    openEdit ? <button style={{background:  'white'}} onClick={()=> handleUpdate()} >Submit</button> : <button style={{background:  'white'}} onClick={()=> setOpenEdit(true)} >Edit</button>
                }
            </td>
        </tr>
    )
}
export default EntryListElement