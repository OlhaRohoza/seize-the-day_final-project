import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from "../UserContext";
import Day from "../pages/Day";
import Button from "./Button";
import Searchbar from './Searchbar';
import moment from 'moment';


function Sidebar() {
    const [startDateInline, setStartDateInline] = useState(new Date());
    // const [startWeek, setStartWeek] = useState(new Date());
    const [startMonth, setStartMonth] = useState(new Date());
    const [startYear, setStartYear] = useState(new Date());
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    console.log(user.id)

    // const handleWeek = () => {
    //     console.log('week report');
    //     const input = document.querySelector('.Calendar--Week');
    //     console.log(input.value);
    // }

    const handleRandom = () => {
        console.log('Random day');
        navigate('/')
    }

    return (

        <div className="sidebar" style={{ backgroundColor: '#f0dbff' }}>
            <br />
            <Searchbar />

            <DatePicker className='Calendar--Inline'
                selected={startDateInline}
                onChange={(date) => setStartDateInline(date)}
                inline
            />

            <Button name='All entries' handleClick={() => navigate('/user/all')} />

            {/* <DatePicker className='Calendar--Week'
                selected={startWeek}
                onChange={(date) => setStartWeek(date)}
                dateFormat="ww"
                showFullMonthYearPicker
            />
            <Button name='Week report' handleClick={handleWeek} /> */}

            <DatePicker className='Calendar--Month'
                selected={startMonth}
                onChange={(date) => setStartMonth(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
            />
            <Button name='Month report' handleClick={() => navigate(`/user/report/month/${moment(startMonth).format('YYYY')}/${moment(startMonth).format('MM')}`)} />

            <DatePicker className='Calendar--Year'
                selected={startYear}
                onChange={(date) => setStartYear(date)}
                showYearPicker
                dateFormat="yyyy"
            />
            <Button name='Year report' handleClick={() => navigate(`/user/report/year/${moment(startYear).format('YYYY')}`)} />

            <Button name='Random date' handleClick={handleRandom} />
        </div>

    )
}

export default Sidebar;