import Button from "./Button";
import Searchbar from './Searchbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from 'react';
import axios from 'axios';
import EntriesContext from "../context/EntriesContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

function Sidebar() {
    const [startDateInline, setStartDateInline] = useState(new Date());
    const [startWeek, setStartWeek] = useState(new Date());
    const [startMonth, setStartMonth] = useState(new Date());
    const [startYear, setStartYear] = useState(new Date());
    const navigate = useNavigate();

    const { setEntries } = useContext(EntriesContext);
    const { user } = useContext(UserContext);

    console.log(user.id)

    const handleAll = () => {
        console.log('all entries');

    }

    const handleWeek = () => {
        console.log('week report');
        const input = document.querySelector('.Calendar--Week');
        console.log(input.value);


    }

    const handleMonth = async () => {
        console.log('month report');
        const input = document.querySelector('.Calendar--Month');
        const hey = input.value.split(' ');
        console.log(hey);

        try {
            const res = [
                {
                    date: '',
                    note: '',
                }
            ]

            setEntries(res)

            navigate('/user/report/month')

        } catch (err) {
            console.log(err.message)
        }
    }

    const handleYear = () => {
        console.log('year report');
        const input = document.querySelector('.Calendar--Year');
        console.log(input.value);
    }

    const handleRandom = () => {
        console.log('Random day');
    }

    return (

        <div className="sidebar" style={{ backgroundColor: '#f0dbff' }}>

            <Searchbar />

            <DatePicker className='Calendar--Inline'
                selected={startDateInline}
                onChange={(date) => setStartDateInline(date)}
                inline
            />

            <Button name='All entries' handleClick={handleAll} />

            <DatePicker className='Calendar--Week'
                selected={startWeek}
                onChange={(date) => setStartWeek(date)}
                dateFormat="ww"
                showFullMonthYearPicker
            />
            <Button name='Week report' handleClick={handleWeek} />

            <DatePicker className='Calendar--Month'
                selected={startMonth}
                onChange={(date) => setStartMonth(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
            />
            <Button name='Month report' handleClick={handleMonth} />

            <DatePicker className='Calendar--Year'
                selected={startYear}
                onChange={(date) => setStartYear(date)}
                showYearPicker
                dateFormat="yyyy"
            />
            <Button name='Year report' handleClick={handleYear} />





            <Button name='Random date' handleClick={handleRandom} />
        </div>

    )
}

export default Sidebar;