import React from "react";
import './closeFriend.css'
export default function CloseFriend({user}) {

  return (
    <li className="siderbarFriend">
      <img
        src={user.ProfilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="siderbarFriendName">{user.username}</span>
    </li>
  );
}
