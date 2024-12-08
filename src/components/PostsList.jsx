import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function bodyAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  //   let modalContent;

  //   if (modalIsVisible){
  //     modalContent = (
  //         <Modal onClose={hideModalHandler}>
  //           <NewPost
  //             onBodyChange={bodyChangeHandler}
  //             onAuthorChange={bodyAuthorHandler}
  //           />
  //         </Modal>
  //     );
  //   }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={bodyAuthorHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Author #2" body="some body content #2" />
      </ul>
    </>
  );
}

export default PostsList;
