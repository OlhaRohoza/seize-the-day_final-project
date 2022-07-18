import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';






const EntryListElement = ({element}) => {
    const [formData, setFormData] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
    const navigate = useNavigate();
    
    
  
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
        navigate('/user/day/'+formData.date)
       
      
        
        
    }
   const refreshPage = async () => {
        window.location.reload(true)
      }    
   
   

    
    return (
      <div>
             
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
                        openEdit ? <button  style={{background:  'white'}} onClick={()=> handleUpdate()} handleClick={()=>refreshPage()}>Submit</button> : <button style={{background:  'white'}} onClick={()=> setOpenEdit(true)} >Edit</button>
                    }
                </td>
            </tr>

            
            
           
            
      </div>
    )
}
export default EntryListElement