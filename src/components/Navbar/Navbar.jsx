import { NavLink } from "react-router-dom";
import "./DesktopNavbar.css"

function Navbar() {
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
        <div className="desktop-navbar-wrapper">
            <h1 className="desktop-navbar-logo">Logo</h1>
            <nav className="desktop-navbar">
                { renderNavItem('/calendar', 'Calendario') } 
                { renderNavItem('/', 'Tareas diarias') }
                { renderNavItem('/time', 'Tiempo') }
            </nav>
        </div>
     );
}

export default Navbar;