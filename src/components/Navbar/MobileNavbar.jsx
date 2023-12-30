import { NavLink } from "react-router-dom";
import "./MobileNavbar.css"

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
            <h2>icono</h2>
        </div>
     );
}

export default MobileNavbar;