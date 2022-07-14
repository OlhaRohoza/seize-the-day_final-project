import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries } from "../actions/entries";

export function MonthPage() {

    const params = useParams()
    console.log(params);

    const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false)

    console.log(entries);

    const fetchData = async () => {
        setLoadingEntries(true)
        const payload = { type: 'month', value: params.period };

        const res = await getEntries(payload);

        setEntries(res);
        setLoadingEntries(false)
    }

    useEffect(() => {

        fetchData()

    }, [])

    // const navigate = useNavigate()


    return (
        <Fragment>
            {loadingEntries ? 'loading...'
                : <>
                    <h1>
                        Report of {params.period || 'N/A'} entries:
                    </h1>
                    <div>
                        graph
                    </div>
                    <div>
                        entries
                    </div>
                    <div>
                        pictures
                    </div></>

            }



        </Fragment>
    )
}