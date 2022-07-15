import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { All } from '../pages/All';
import { Entry } from '../pages/Entry';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

import RandomDay from '../pages/RandomDay';
import { YearPage } from '../pages/YearPage';
import { MonthPage } from '../pages/MonthPage'

export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<span>Home page</span>} />
            <Route path="/user" element={<Entry />} />
            <Route path="/user/day" element={<RandomDay />} />
            <Route path="/user/all" element={<All />} />
            <Route path="/user/day" element={<span>Here we see saved Entry and edit it / or it shows us the Certain/Random Entry</span>} />
            <Route path="/user/report/month/:period" element={<MonthPage />} />
            <Route path="/user/report/year/:year" element={<YearPage />} />
            <Route path="/user/search" element={<span>Here we have result of SEARCH / or ALL entries</span>} />

            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    )
}