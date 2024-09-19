import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noopener noreferrer">Northeastern</a><br/>
      <Link to="Accounts" id="wd-account-link">Account</Link><br/>
      <Link to="Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="Courses" id="wd-course-link">Courses</Link><br/>
      <Link to="Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="../labwork" id="wd-labwork-link">Labs</Link><br/>
      <Link to="../">Landing Page</Link><br/>
    </div>
  );
}