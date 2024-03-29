import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav>
            <ul>
                <li>
                    <a onClick={() => handleNavigation("/calculator")}>Calculator</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation("/weather")}>Weather</a>
                </li>
            </ul>
        </nav>
    );
}; 

export default Navbar;