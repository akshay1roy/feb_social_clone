import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends </b> have a birthday
            today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfroItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Patna </span>
          </div>
          <div className="rightbarInfroItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Jehanabad</span>
          </div>
          <div className="rightbarInfroItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/fourth.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akshay kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/second.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akshay kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/third.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akshay kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/seven.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akshay kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/eight.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akshay kumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/six.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akshay kumar</span>
          </div>

        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar />: <HomeRightbar/> }
      </div>
    </div>
  );
}
