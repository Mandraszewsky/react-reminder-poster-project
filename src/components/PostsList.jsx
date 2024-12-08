import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    //setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]); // better way
    //react ensures that state is the latest correct state, even if there is multiple pending state updates
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{textAlign: 'center', color:'white'}}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
