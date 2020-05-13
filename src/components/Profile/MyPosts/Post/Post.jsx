import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={`${s.postimg} ${s.like}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHoArRxUPU0bFzS1oEjx7w01Vx4YV6nVncWXXoXRz3o8tKrSlf" />
      {props.message}
      <div>
        <span>Liks:{props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;
