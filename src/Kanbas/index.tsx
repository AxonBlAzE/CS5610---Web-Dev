import { Routes, Route, Navigate } from 'react-router-dom';
import Accounts from './Accounts';
import Dashboard from './Dashboard';
import Courses from './Courses/index';
import AccountNavigation from './Navigation';

const Kanbas = () => {
  return (
    <div className="kanbas">
      <h1>Kanbas App</h1>
      <h4>By Shreyans Mulkutkar</h4>
      <h6>CS5610 - 20596</h6>
      <div>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <AccountNavigation />
              </td>
              <td valign="top">
                <Routes>
                  <Route path="/" element={<Navigate to="Accounts/SignIn" replace/>} />
                  <Route path="Accounts/*" element={<Accounts />} />
                  <Route path="Dashboard/*" element={<Dashboard />} />
                  <Route path="Courses/*" element={<Courses />} />
                  <Route path="Calendar" element={<h1>Calendar</h1>} />
                  <Route path="Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kanbas