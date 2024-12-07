import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpenIcon from "../../assets/menu_open_2.svg";
import menuCloseIcon from "../../assets/menu_close_1.svg";

/* Navbar */
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            
            {/* Mobile Menu Toggle */}
            <img 
                src={menuOpen ? menuCloseIcon : menuOpenIcon} 
                alt="Menu Toggle" 
                className="menu-toggle" 
                onClick={() => setMenuOpen(!menuOpen)} 
            />
            
            {/* Navigation Links */}
            <ul className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
                <li><AnchorLink className="anchor-link" href="#home">Home</AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#about">About</AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#services">Services</AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#projects">Projects</AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#contacts">Contact</AnchorLink></li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className="anchor-link" href="#contacts">Let's Connect</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
