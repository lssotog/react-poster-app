import { useState } from "react";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { Post } from "./Post";
import { Modal } from "./Modal";

export const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("React.js is great!");
  const [enteredAuthor, setEnteredAuthor] = useState("Misito");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function AuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={AuthorChangeHandler}
        />
      </Modal>

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Luz Stella" body="Amazing!" />
      </ul>
    </>
  );
};
