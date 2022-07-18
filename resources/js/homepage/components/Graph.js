import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export function Graph({ entries = [] }) {


    const [chartData, setChartData] = useState(null);

    useEffect(() => {


        if (entries.length) {
            const data = {
                labels: entries.map((element) => element.date),
                datasets: [
                    {
                        label: "Rates",
                        data: entries.map((element) => element.rate),
                        fill: true,
                        backgroundColor: "#fafafa",
                        borderColor: "#7c73e6"
                    },
                ],
                // options: {
                //     scales: {
                //         yAxes: [{
                //             ticks: {
                //                 beginAtZero: true,
                //                 max: 10,
                //                 min: 0
                //             }
                //         }]
                //     }
                // }

            };

            setChartData(data)
        }

    }, [entries])


    if (!chartData) return null

    return (
        <div className="entry--graph" style={{ height: '275px', width: '500px' }}>
            <Line data={chartData} />
        </div>
    )

}