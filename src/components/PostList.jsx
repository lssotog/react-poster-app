import { useState } from "react";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { Post } from "./Post";
import { Modal } from "./Modal";

export const PostList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("React.js is great!");
  const [enteredAuthor, setEnteredAuthor] = useState("Misito");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function AuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={AuthorChangeHandler}
          />
        </Modal>
      ) : (
        false
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Luz Stella" body="Amazing!" />
      </ul>
    </>
  );
};
