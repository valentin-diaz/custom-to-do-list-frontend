import { NavLink } from "react-router-dom";
import "./MobileNavbar.css"
import { FaBars } from "react-icons/fa"
import { useState } from "react";

const HamburgerMenu = ({ visible, setVisible }) => {
    const renderNavItem = (path, label) => {
        return (
            <NavLink
                to={path}
                className={({ isActive }) =>
                    [
                        "mobile-navbar-item",
                        isActive ? "active" : "",
                    ].join(" ")
                }
            >
                {label}
            </NavLink>
        )
    }
    
    return (
        <div className={[
            "hamburger-menu",
            visible ? "visible" : ""
        ].join(" ")}>
            <nav className="mobile-navbar">
                { renderNavItem('/calendar', 'Calendario') }
                { renderNavItem('/', 'Tareas Diarias') }
                { renderNavItem('/time', 'Tiempo') }
            </nav>
        </div>
    )
}

function MobileNavbar() {
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    return ( 
        <>
            <div className="mobile-navbar-wrapper">
                <h1 className="mobile-navbar-logo">Logo</h1>
                <div className="mobile-navbar-button" onClick={() => setHamburgerMenuVisible(prev => !prev)}>
                    <FaBars size={30}/>
                </div>
            </div>

            <HamburgerMenu visible={hamburgerMenuVisible} setVisible={setHamburgerMenuVisible}/>
        </>
     );
}

export default MobileNavbar;