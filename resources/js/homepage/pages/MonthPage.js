import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries } from "../actions/entries";
import { useNavigate } from "react-router-dom";
import { Graph } from "../components/Graph";

export function MonthPage() {

    const params = useParams();
    // console.log(params);
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false);

    const navigate = useNavigate();

    // console.log(entries);

    const fetchData = async () => {
        setLoadingEntries(true)
        if (params.year && params.month) {
            const payload = { type: 'month', value1: params.year, value2: params.month };

            const res = await getEntries(payload);
            setEntries(res);
        }

        setLoadingEntries(false);
    }

    useEffect(() => {

        fetchData()

    }, [params.year, params.month])

    return (
        <Fragment>
            {loadingEntries ? 'loading...'
                : <>
                    <h1>
                        {month[params.month - 1] || 'N/A'}  {params.year || 'N/A'}
                    </h1>
                    <Graph entries={entries} />
                    <div className="month--notes">
                        {entries && entries.length >= 1
                            ? (<><h2>You have {entries.length} entries.</h2>
                                <br />
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th></th>
                                            <th>Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            entries.map((entry) => (
                                                <tr key={entry.id} onClick={() => navigate('/user/day/' + entry.date)}>
                                                    <td>{entry.date} </td>
                                                    <td> </td>
                                                    <td>{entry.note.length < 99 ? entry.note : entry.note.substring(0, 100)} ... <span className="read--more">Read more...</span></td>
                                                </tr>)
                                            )
                                        }

                                    </tbody>

                                </table>
                            </>
                            )
                            : 'You have no entries.'
                        }
                    </div>
                    <div className="month--pictures">
                        {/* pictures */}
                    </div></>

            }



        </Fragment>
    )
}