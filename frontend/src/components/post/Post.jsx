import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLinked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLinked ? like - 1 : like + 1);
    setIsLiked(!isLinked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((u) => {
                  return u.id === post.userId;
                })[0].ProfilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {
                Users.filter((u) => {
                  return u.id === post.userId;
                })[0].username
              }
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/likes.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              src="/assets/hearts.png"
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
