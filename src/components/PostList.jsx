import { useState } from "react";
import NewPost from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

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
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={AuthorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Luz Stella" body="Amazing!" />
      </ul>
    </>
  );
};
