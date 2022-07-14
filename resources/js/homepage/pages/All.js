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

        setEntries(res);
        setLoadingEntries(false)

    }

    useEffect(() => {

        fetchData()

    }, [])

    const navigate = useNavigate()

    return (
        <Fragment>
            <div className="Entries--all">
                {
                    loadingEntries ? 'loading...' :
                        entries.length ?
                            (<><h4>You have {entries.length} entries</h4>
                                {(entries.length % 25) > 1 ? <> <p>You have {Math.round(entries.length / 25)} pages. Page {currentPage + 1} </p> </> : ''}
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
                                                <tr key={entry.id} onClick={() => navigate('/user/day/' + entry.id)}>
                                                    <td>{entry.date} </td>
                                                    <td style={{ textAlign: 'center' }}>{entry.rate} </td>
                                                    <td>{entry.note.length < 99 ? entry.note : entry.note.substring(0, 100)} ...</td>
                                                </tr>)
                                            )
                                        }

                                    </tbody>

                                </table>
                                <div className="page--all--buttons" style={{ textAlign: 'center' }}>
                                    {
                                        !!currentPage && <button onClick={() => setCurrentPage(!currentPage ? currentPage : currentPage - 1)}>back</button>
                                    }
                                    {
                                        entries.length - ((currentPage || 1) * perPage) > perPage && <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
                                    }

                                </div>

                            </>) :
                            (<> <p>You have no entries yet. You can create here: </p>
                                <Link to='/user' />
                            </>)
                }
            </div>
        </Fragment>

    )
}