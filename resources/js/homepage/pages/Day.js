import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries } from "../actions/entries";
import EntryListElement from "./EntryListElement";

function Day() {

  const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false)
    const params = useParams();
    
    
    console.log(params);

    const fetchData = async () => {
      setLoadingEntries(true)
      const payload = { type: 'day', value: params.date };

      const res = await getEntries(payload);

      setEntries(res);

      setLoadingEntries(false)
      console.log(res.data)
  }


  useEffect(() => {

      fetchData()

  }, [])
  

  
  return (

    <Fragment >
    {loadingEntries ? 'loading...'
        : <>
            <h1>
            Today : {params.date}
            </h1>
           
            <div>
             <h2>"Here’s your notes of the day : 
              
              <table style={{ textAlign: 'left'}}>
                <tr>
                  <th>note</th>
                  <th>rate</th>
                </tr>
                {
                  entries.map((element) => <EntryListElement element={element} key={element.id} />)
                }
              </table>
             </h2>
            </div>
            
           
            </>

    }
   
    
</Fragment>

  )
}

export default Day
