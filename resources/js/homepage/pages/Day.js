import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries } from "../actions/entries";
import EntryListElement from "./EntryListElement";
import moment from 'moment';

function Day() {

  const [message, setMessage] = useState(false);
  const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false)
    const params = useParams();
    
    
    console.log(params);

  // console.log(params);

  const fetchData = async () => {
    setLoadingEntries(true)
    const payload = { type: 'day', value: params.date };

    const res = await getEntries(payload);
    console.log(res);
    setEntries(res);

    setLoadingEntries(false)

      setLoadingEntries(false)
      console.log(res.data)
  }

  useEffect(() => {

    fetchData()

  }, [params])


  return (

    <Fragment >
      {loadingEntries ? 'loading...'
        : entries.length
          ? <div className="Entry--day-display">
            {message ? <h4 style={{ color: '#1Fd655' }}>{message}</h4> : ''}
            <h1>
              Entry from {moment(params.date).format('Do MMMM YYYY')}
            </h1>

            <div>
              {
                entries.map((element) => <EntryListElement element={element} key={element.id} setMessage={setMessage} />)
              }
            </div>
          </div >
          : (<>
            {message ? <h4 style={{ color: 'red' }}>{message}</h4> : ''}
            <p>You have no entries on {moment(params.date).format('Do MMMM YYYY')}. </p>
            <Link to='/user'>You can create here </Link>
          </>)

      }


    </Fragment>

  )
}

export default Day
