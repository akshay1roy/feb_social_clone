import React, { useEffect, useState } from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useParams } from "react-router";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [User,setUser]=useState({});
  const username=useParams().username;

  // console.log(params.username)

  useEffect(()=>{
    const fetchUser=async ()=>{
      const res= await axios.get(`/users?username=${username}`)
      // console.log(res);
      setUser(res.data);
    }

    fetchUser();
  },[username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
               src={User.coverPicture ? PF+User.coverPicture :  PF+"person/cover.jpg"}
                // src="/assets/post/six.jpeg"
                alt=""
                className="profileCoverImage"
              />
              <img
               src={User.ProfilePicture ? PF+User.ProfilePicture : PF+"person/profiles.jpg"}
                // src="/assets/person/first.jpeg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{User.username}</h4>
              <span className="profileInfoDescr">
               {User.desc}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={User} />
          </div>
        </div>
      </div>
    </>
  );
}
