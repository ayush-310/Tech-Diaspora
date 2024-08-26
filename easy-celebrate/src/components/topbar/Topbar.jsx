import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  "./topbar.css"


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo" style={{ color: "orange" }}>Vikriti</span>
            </div>

            <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
            <div className="topbarRight">

                <div className="topbarLinks">
                    {/* <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span> */}
                </div>

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
