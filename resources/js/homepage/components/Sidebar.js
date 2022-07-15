import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from "../UserContext";
import Day from "../pages/Day";
import Button from "./Button";
import Searchbar from './Searchbar';
import './sidebar.css';

function Sidebar() {
    const [startDateInline, setStartDateInline] = useState(new Date());
    const [startWeek, setStartWeek] = useState(new Date());
    const [startMonth, setStartMonth] = useState(new Date());
    const [startYear, setStartYear] = useState(new Date());
    const navigate = useNavigate();

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

        const url = `http://www.seize-the-day.test/api/${user.id}/year/${input.value}`;

        const fetchData = async () => {
            const resonse = await fetch(url);
            console.log(resonse);
            const data = await resonse.json();
            console.log(data);
            // setEntries(data);
            // navigate('/user/report/year');
        }
        fetchData();
    }

    const handleRandom = () => {
        console.log('Random day');
        navigate('/user/day')
    }

    return (

        <div className="sidebar" >

            <Searchbar />

            <DatePicker className='Calendar--Inline'
                selected={startDateInline}
                onChange={(date) => setStartDateInline(date)}
                inline
            />

            <Button name='All entries' handleClick={() => navigate('/user/all')} />

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