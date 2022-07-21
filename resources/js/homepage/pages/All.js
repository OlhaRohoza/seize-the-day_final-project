import { Link, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { getEntries } from "../actions/entries";


export function All() {

    const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false)

    // console.log(entries);

    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(25);

    const fetchData = async () => {
        setLoadingEntries(true)
        const payload = { type: 'all' };

        const res = await getEntries(payload);
        console.log(res);
        setEntries(res);
        setLoadingEntries(false)

    }

    useEffect(() => {

        fetchData()

    }, [])

    const navigate = useNavigate()


    return (
        <Fragment>
            <div className="entries--all">
                {
                    loadingEntries ? 'loading...' :
                        entries.length ?
                            (<><h2>You have {entries.length} entries</h2> <br />

                                {(entries.length % 25) > 1 ? <> <p> This page is #{currentPage + 1}. Entries from {(currentPage * perPage) + 1} to  {(currentPage + 1) * perPage} </p> </> : ''}
                                <br />
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Rate</th>
                                            <th>Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            entries.slice(currentPage * perPage, (currentPage + 1) * perPage).map((entry) => (
                                                <tr key={entry.id} onClick={() => navigate('/user/day/' + entry.date)}>
                                                    <td style={{ width: '90px' }} >{entry.date} </td>
                                                    <td style={{ textAlign: 'center' }}>{entry.rate} </td>
                                                    {/* <td>{entry.note} <span className="read--more">Check the entry...</span></td> */}
                                                    <td>{entry.note.length < 99 ? entry.note : entry.note.substring(0, 100)} ... <span className="read--more">Read more...</span></td>
                                                </tr>)
                                            )
                                        }

                                    </tbody>

                                </table>
                                <div className="page--all--buttons" style={{ textAlign: 'center' }}>
                                    {
                                        !!currentPage && <button onClick={() => setCurrentPage(!currentPage ? currentPage : currentPage - 1)} style={{ marginRight: '1em' }}>back</button>
                                    }
                                    {
                                        entries.length - ((currentPage || 1) * perPage) > perPage && <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
                                    }

                                </div>

                            </>) :
                            (<> <p>You have no entries yet. </p>
                                <Link to='/user'>You can create here </Link>
                            </>)
                }
            </div>
        </Fragment>

    )
}