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
            { renderNavItem('/xd', 'Tiempo') }
            { renderNavItem('/', 'Tareas diarias') }
            { renderNavItem('/calendar', 'Calendario') }
        </nav>
     );
}

export default Navbar;