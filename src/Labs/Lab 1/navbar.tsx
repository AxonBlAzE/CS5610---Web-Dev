import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="./">Lab1</Link> 
            </div>
            <ul className="navbar-links">
                <li><Link to="headingsandpara">Headings and Paragraphs</Link></li> 
                <li><Link to="lists">Lists</Link></li>
                <li><Link to="tables">Tables</Link></li> 
                <li><Link to="forms">Forms</Link></li> 
                <li><Link to="images">Images</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
