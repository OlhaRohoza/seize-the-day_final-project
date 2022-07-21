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
            <h2>What are you writing for?</h2>
            <br />
            <p>Whether you're looking for a tool to record </p>
            <p>your daily emotions and activities, ideas and insights, </p>
            <p>the "Seize the day" the best  application for it.</p>
            <p><strong>Today is the best day to start.</strong></p>
            <br />

            <button style={{ height: '2em', fontSize: '1em', padding: '0.5em' }}><Link to='/registration'> Ready to start writing? Sign up now! </Link></button>
        </div>
    )
}