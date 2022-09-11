import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar navbar-expand-lg bg-light">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>   
        
        </div>
    );
}

export default Nav;
