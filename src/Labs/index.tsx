import './labs.css';
import HeadingsAndParagraphs from './headingsandpara';
import Lists from './lists';
import Forms from './forms';
import Navbar from './navbar';
import Table from './tables';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Images from './images';

const LabWork = () => {
    return (
        <div className="lab-work">

            <div className="top-buttons">
                <Link to="/" className="back-button">
                    Back to Landing Page
                </Link>
                <div></div>
                <Link to="../kanbas" className="kanbas-button">
                    Go to Kanbas
                </Link>
            </div>

            <h1>Lab Work</h1>
            <h1>Shreyans Mulkutkar</h1>
            <h4>CS5610 - 20596</h4>
            <h2>Lab 1</h2>

            <Navbar />

            <Routes>
                <Route path="/" element={<h3>Use the above navbar to view different components.</h3>} />
                <Route path="headingsandpara" element={<HeadingsAndParagraphs />} />
                <Route path="lists" element={<Lists />} />
                <Route path="tables" element={<Table />} />
                <Route path="forms" element={<Forms />} />
                <Route path="images" element={<Images />} />
            </Routes>
        </div>
    );
}

export default LabWork;
