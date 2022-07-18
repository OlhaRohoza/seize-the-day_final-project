import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries } from "../actions/entries";
import { useNavigate } from "react-router-dom";
import { Bar } from 'react-chartjs-2';

export function MonthPage() {

    const params = useParams();
    // console.log(params);
    // let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [entries, setEntries] = useState([])
    const [loadingEntries, setLoadingEntries] = useState(false);

    // const [dates, setDate] = useState([]);
    // const [rates, setRate] = useState([]);

    const navigate = useNavigate();
    const [chartData, setChartData] = useState({});

    // console.log(entries);

    const fetchData = async () => {
        setLoadingEntries(true)
        const payload = { type: 'month', value1: params.year, value2: params.month };

        const res = await getEntries(payload);
        console.log(res);

        // let dateArray = [];
        // let rateArray = [];
        // res.map((entry, index) => (dateArray.push(index), rateArray.push(entry.rate)));
        // console.log(dateArray);
        // console.log(rateArray);
        // setDate(dateArray);
        // setRate(rateArray);

        setChartData({
            labels: res.map((entry) => entry.date),
            datasets: [
                {
                    // label: "Rates in the Entries",
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: res.map((entry) => entry.rate)
                }
            ]
        });

        setEntries(res);
        setLoadingEntries(false);

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
                        Report of {params.month || 'N/A'}  {params.year || 'N/A'} entries:
                    </h1>
                    {/* <Bar data={chartData} /> */}
                    <div className="month--notes">
                        {entries && entries.length >= 1
                            ? (<><h2>You have {entries.length} entries.</h2>
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
                                                    <td>{entry.note.length < 99 ? entry.note : entry.note.substring(0, 100)} ...</td>
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
                        pictures
                    </div></>

            }



        </Fragment>
    )
}