
import React, { useContext } from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
function Topbar() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }} >
          <span className="logo">FebSocial</span>
        </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className='searchIcon' />
          <input type="text" placeholder='Search for friend , post or video ' className='searchInput' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="tobarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="tobarIconBadge">
              1
            </span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="tobarIconBadge">
              2
            </span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="tobarIconBadge">
              12
            </span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "/person/profiles.jpg"} alt="" className='topbarImg' />

        </Link>
      </div>
    </div>
  )
}

export default Topbar
