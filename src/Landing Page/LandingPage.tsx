import "./LandingPage.css";
import { FaGithub } from "react-icons/fa";
import TableRow from "./tableRows";
import { BsArrowUpRightSquare } from "react-icons/bs";

const LandingPage = () => {
    return ( 
        <div className="landing-page">
            <h1>
        Shreyans Mulkutkar
      </h1>
      <h2>
        CS5610 - 20596
      </h2>
      <div className="button-container">
        <a href='https://github.com/AxonBlAzE/CS5610-LandingPage'><button className="button"> Landing Page Repo <FaGithub/></button></a>
        <a href='https://github.com/AxonBlAzE/CS5610-Lab-Work/tree/lab1'><button className="button"> Lab Work Repo <FaGithub/></button></a>
        <a href='https://github.com/AxonBlAzE/CS5610-Kanbas'><button className="button"> Kanbas Repo <FaGithub/></button></a>
        <a href='https://main--kanbas-webapp-sm.netlify.app/'><button className="button"> Go to Kanbas <BsArrowUpRightSquare/></button></a>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              Assignment
            </th>
            <th>
              Description
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow 
            name = "A1"
            description = "Created a landing page for CS5610 that will contain the hyperlinks to all the following assignments as well as implemented the lab-work which includes getting familiar with headings, paragraphs, lists, links, tables and routing."
            url = 'https://cs5610-labwork-shreyansmulkutkar.netlify.app/' 
          />
          <TableRow 
            name = "A2"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A3"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A4"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A5"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A6"
            description = "Coming Soon..."
            url = '' 
          />
        </tbody>
      </table>
        </div>
     );
}
 
export default LandingPage;