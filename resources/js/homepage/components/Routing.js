import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { All } from '../pages/All';
import {Entry} from '../pages/Entry';
import Login from '../pages/Login';
import LogoutButton from '../pages/LogoutButton';
import Registration from '../pages/Registration';
import Report from '../pages/Report';
import Day from '../pages/Day';

export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<span>Home page</span>} />
            <Route path="/user" element={<Entry />} />
            <Route path="/user/day" element={<Day />} />
            <Route path="/user/all" element={<All />} />
            <Route path="/user/report/:period" element={<Report />} />
            <Route path="/user/search" element={<span>Here we have result of SEARCH / or ALL entries</span>} />

            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    )
}