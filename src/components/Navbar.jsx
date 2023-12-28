import { NavLink } from "react-router-dom";

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
        <nav id="navbar">
            { renderNavItem('/calendar', 'Calendario') } 
            { renderNavItem('/', 'Tareas diarias') }
            { renderNavItem('/time', 'Tiempo') }
        </nav>
     );
}

export default Navbar;