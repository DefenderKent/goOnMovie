import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Textarea } from "./../../common/FormControls/FormControls";
import {
  required,
  maxLengthCreator
} from "./../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import { Component } from "react";

let maxLength30 = maxLengthCreator(30);

const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"enter post"}
          name={"newPostText"}
          component={Textarea}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};
const PostReduxForm = reduxForm({
  form: "postform"
})(PostForm);

const MyPosts = React.memo(props => {
  {
    let postsElements = props.posts.map(p => (
      <Post message={p.message} likeCount={p.likeCount} />
    ));

    let addNewPost = values => {
      props.addPost(values.newPostText);
    };

    return (
      <div>
        <div className={s.postItem}>
          <h3>My posts</h3>
          <PostReduxForm onSubmit={addNewPost} />
          {/* <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add</button>
        </div> */}
        </div>
        <div>{postsElements}</div>
      </div>
    );
  }
});

export default MyPosts;
