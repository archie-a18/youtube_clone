import React from "react";
import "./header.css";

function Header() {
    return (
        <div>
            
                <div className="header1">
                    <a href="google.com" ><img className="toggle" src="../images/hamburger.png" alt="toggler"></img></a>
                    <img className="icon" src="../images/icon.jpg" alt="youtube"></img>
                    <div className="search-box">
                        <input className="search-bar" type="text" placeholder="search"></input>
                        <button className="search-btn" type="submit" ><img className="icon2" src="../images/search.png" alt="search"></img>
                        </button>
                    </div>
                </div>
           
        </div>
    )
}

export default Header;