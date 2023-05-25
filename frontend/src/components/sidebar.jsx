import React from "react";
import "./sidebar.css"

function Sidebar() {
    return (

        <div className="side-bar">
        <a href="google.com" className="links active"><img className="side-img" src="../images/home.png" alt="Home" />Home</a>
        <a href="google.com" className="links"><img className="side-img" src="../images/subscribe.png" alt="Subscriptions" />Subscriptions</a>
        <a href="google.com" className="links"><img className="side-img" src="../images/library.png" alt="Library" />Library</a>
        <a href="google.com" className="links"><img className="side-img" src="../images/play.png" alt="Library" />Your videos</a>
        <a href="google.com" className="links"><img className="side-img" src="../images/history.png" alt="History" />History</a>
        <a href="google.com" className="links"><img className="side-img" src="../images/like.png" alt="Liked videos" />Liked videos"</a>
        <a href="google.com" className="links"><img className="side-img" src="../images/watchlater.jpg" alt="Watch later" />Watch later</a>        
        <a href="google.com" className="links"><img className="side-img" src="../images/expand-button.png" alt="show" />show more..</a>        

        </div>
    );
}

export default Sidebar;
