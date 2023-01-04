import { Link } from "react-router-dom";
import Home from "./Home";



const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navcontainer3">
                <li><Link to="/">NovellER</Link></li>
            </ul>

            <ul className="navcontainer">
                <li><Link to="/">Home</Link></li>
                <li><a href="#Aboutidentity">About</a></li>
                <li><Link to="/discover">Discover</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>


            <ul className="navcontainer2">
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/create">Publish Novel</Link></li>
            </ul>
      </div>
    );
}
 
export default Navbar;