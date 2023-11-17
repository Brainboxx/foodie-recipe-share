 import React, {useContext} from 'react'
 import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    let {user, logoutUser} = useContext(AuthContext)
    const personalizedDashboardURL = `/dashboard/${user.username}`;

    return ( 
        <nav className="navbar">
            <h1>Foodie</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact us</Link>
                <Link to={"/recipe-share"}>Share-recipe</Link>
                {user ? (
                    <>
                        <Link to={personalizedDashboardURL}>My Dashboard</Link>
                        <p onClick={logoutUser}>logout</p>
                    </>
                ):(
                    <Link to="/login">login</Link>
                )}
            </div>
        </nav>
     );
}
 
export default Navbar;
