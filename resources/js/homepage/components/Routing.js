import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { All } from '../pages/All';
import { Entry } from '../pages/Entry';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Day from '../pages/Day';
import { YearPage } from '../pages/YearPage';
import { MonthPage } from '../pages/MonthPage';
import { Homepage } from '../pages/Homepage';
import { Fragment, useContext } from 'react';
import UserContext from '../UserContext';
import { Search } from '../pages/Search';
import ImageUpload from './ImageUpload';



export function Routing() {
    const { user } = useContext(UserContext);
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {
                user ? <Fragment>
                    <Route path="/user" element={<Entry />} />
                    <Route path="/user/day/:date" element={<Day />} />
                    <Route path="/user/all" element={<All />} />
                    <Route path="/user/report/month/:year/:month" element={<MonthPage />} />
                    <Route path="/user/report/year/:year" element={<YearPage />} />
                    <Route path="/user/search/:phrase" element={<Search />} />
                    {/* <Route path="/user/add-image" element={<ImageUpload />} /> */}
                </Fragment> :
                    <Fragment>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registration/" element={<Registration />} />
                    </Fragment>
            }

            <Route path="*" element={<Homepage />} />

        </Routes>
    )
}