import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Entry } from './Entry';
import Login from '../pages/Login';
import LogoutButton from '../pages/LogoutButton';
import Registration from '../pages/Registration';
import Report from '../pages/Report';
import RandomDay from '../pages/RandomDay';

export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<span>Home page</span>} />
            <Route path="/user" element={<Entry />} />
            <Route path="/user/day" element={<RandomDay />} />
            <Route path="/user/report/:period" element={<Report />} />
            <Route path="/user/search" element={<span>Here we have result of SEARCH / or ALL entries</span>} />

            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    )
}