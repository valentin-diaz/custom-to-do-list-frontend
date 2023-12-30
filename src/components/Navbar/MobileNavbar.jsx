import { NavLink } from "react-router-dom";
import "./MobileNavbar.css"
import { FaBars } from "react-icons/fa"

function MobileNavbar() {
    const renderNavItem = (path, label) => {
        return (
            <NavLink
                to={path}
                className={({ isActive }) =>
                    [
                        "navbar-item",
                        isActive ? "active" : "",
                    ].join(" ")
                }
            >
                {label}
            </NavLink>
        )
    }
    
    return ( 
        <div className="mobile-navbar-wrapper">
            <h1 className="mobile-navbar-logo">Logo</h1>
            <div className="mobile-navbar-button">
                <FaBars size={30}/>
            </div>
        </div>
     );
}

export default MobileNavbar;