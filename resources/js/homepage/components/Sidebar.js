import Button from "./Button";
import Searchbar from './Searchbar';
// import { Calendar } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function Sidebar() {
    const [startDateInline, setStartDateInline] = useState(new Date());
    const [startWeek, setStartWeek] = useState(new Date());
    const [startMonth, setStartMonth] = useState(new Date());
    const [startYear, setStartYear] = useState(new Date());


    return (

        <div className="sidebar" style={{ backgroundColor: 'rgba(52, 24, 233, 0.5)' ,width: '20%'}}>
            <p>Search bar: </p>
            <Searchbar />
            {/* <Calendar /> */}

            <DatePicker name='Calenda--Inline'
                selected={startDateInline}
                onChange={(date) => setStartDateInline(date)}
                inline
            />

            <Button name='All entries' />

            <DatePicker name='Calendar--Week'
                selected={startWeek}
                onChange={(date) => setStartWeek(date)}
                dateFormat="ww"
                showFullMonthYearPicker
            />
            <Button name='Week report' />

            <DatePicker name='Calendar--Month'
                selected={startMonth}
                onChange={(date) => setStartMonth(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
            />
            <Button name='Month report' />

            <DatePicker name='Calendar--Year'
                selected={startYear}
                onChange={(date) => setStartYear(date)}
                showYearPicker
                dateFormat="yyyy"
            />
            <Button name='Year report' />





            <Button name='Random date' />
        </div>

    )
}

export default Sidebar;