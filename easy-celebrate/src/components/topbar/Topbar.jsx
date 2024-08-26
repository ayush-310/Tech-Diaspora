import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./topbar.css"
import { Link } from 'react-router-dom';


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo" style={{ color: "orange" }}>Vikriti</span>
            </div>

            <div className="topbarCenter">
                <Link to="/" className="topbarLink">Home</Link>
                <Link to="/about" className="topbarLink">About</Link>
                <Link to="/festival" className="topbarLink">Festival</Link>
                <Link to="/ocassion" className="topbarLink">Ocassion</Link>
                <Link to="/contact" className="topbarLink">Contact</Link>
            </div>


            <div className="topbarRight">
                <div className="topbarIcons">

                    {/* <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div> */}

                    {/* <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div> */}

                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        {/* <span className="topbarIconBadge">1</span> */}
                    </div>

                    <div className="topbarIconItem">
                        <AccountCircleIcon />
                        {/* <span className="topbarIconBadge">1</span> */}
                    </div>
                    {/* <img src="/assets/person/about2.jpg" className='topbarImg' alt="" /> */}

                </div>

            </div>
        </div>
    )
}






    //    {/* <div className="searchbar">
    //       <SearchIcon className="searchIcon" />
    //       <input
    //         placeholder="Search for friend, post or video"
    //         className="searchInput"
    //       />
    //     </div> */}