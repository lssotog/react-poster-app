import { useState } from "react";
import classes from "./NewPost.module.css";
import { Modal } from "../components/Modal";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("React.js is great!");
  const [enteredAuthor, setEnteredAuthor] = useState("Misito");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function AuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log("---->", postData);
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={AuthorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
