import React from "react";
import './closeFriend.css'
export default function CloseFriend({user}) {
  
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="siderbarFriend">
      <img
        src={PF+user.ProfilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="siderbarFriendName">{user.username}</span>
    </li>
  );
}
