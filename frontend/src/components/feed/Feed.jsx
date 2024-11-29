import React, { useContext, useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import { Posts } from "../../dummyData";
export default function Feed({ username }) {
  const [Posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(user);

  useEffect(() => {
    const fetchPosts = async () => {
      // "userId":"672cec03c3418d27ed3044bf"
      // console.log("username",username);

      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      // console.log("res",res);
      // console.log(username)
      // console.log(username)
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();

    // console.log(Posts);
  }, [username, user._id]);

  // console.log(Posts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username===user.username) && <Share/>}

        {Posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}
