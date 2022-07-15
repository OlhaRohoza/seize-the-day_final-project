import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

export function Homepage() {

    const navigate = useNavigate()

    const { user } = useContext(UserContext)

    useEffect(() => {

        if (user) return navigate('/user')
    }, [user])

    return (
        <div className="homepage">
            <div className="homepage--box">
                <p>DAYS</p>
                <p>&#187;</p>
                <p>WEEKS</p>
                <p>&#187;</p>
                <p>MONTHS</p>
                <p>&#187;</p>
                <p>YEARS</p>
            </div>
            <h2>What are you writing for?</h2>
            <h4>Whether you're looking for a tool <br /> to record your daily emotions and activities, ideas and insights, <br /> the "Seize the day" the best  application for it.</h4>
            <h4>Today is the best day to start.</h4>
            <button style={{ height: '2em', fontSize: '1em', padding: '0.5em' }}><Link to='/registration'> Ready to start writing? Sign up now! </Link></button>
        </div>
    )
}