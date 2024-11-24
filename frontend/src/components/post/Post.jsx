import React, { useContext, useEffect, useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Users } from "../../dummyData";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLinked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [User, setUser] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(user._id));
  }, [user._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      // console.log(res.data);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: user._id });
    } catch (error) {}
    setLike(isLinked ? like - 1 : like + 1);
    setIsLiked(!isLinked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${User.username}`}>
              <img
                src={
                  User.profilePicture
                    ? PF + User.profilePicture
                    : PF + "person/profile.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{User.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}likes.png`}
              // src="/assets/likes.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              src={`${PF}hearts.png`}
              // src="/assets/hearts.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
