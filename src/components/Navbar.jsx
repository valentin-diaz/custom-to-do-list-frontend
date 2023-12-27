import { NavLink } from "react-router-dom";

function Navbar() {
    const renderNavItem = (path, label) => {
        return (
            <NavLink
                to={path}
                style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black"
                }}}
            >
                {label}
            </NavLink>
        )
    }
    
    return ( 
        <nav id="navbar">
            { renderNavItem('/xd', 'Reporte de horas') }
            { renderNavItem('/', 'Tareas diarias') }
            { renderNavItem('/calendar', 'Calendario') }
        </nav>
     );
}

export default Navbar;