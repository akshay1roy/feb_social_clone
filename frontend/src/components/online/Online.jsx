import React from "react";
import './online.css'
export default function Online({user}) {
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={user.ProfilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
