import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navabr-logo-container">
                <h1>NexaInsure<span className="dot-in">.in</span></h1>
            </div>
            <div className="navabr-items">
                <ul>
                    <li><Link to="" >About Us</Link></li>
                    <li><Link to="" >Claim</Link></li>
                    <li><Link to="" >Renewal</Link></li>
                    <li><Link to="" >New Policy</Link></li>
                </ul>
            </div>
            <div className="navbar-account-button">
                <div className="account-icon">
                    <img  src="/Asserts/Icons/user.png" alt="account-icon"></img>
                </div>
                <button className="account-logo">Accounts</button>
            </div>
        </div>
    )
}

export default Navbar;