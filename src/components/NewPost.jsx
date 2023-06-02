import classes from "./NewPost.module.css";

function NewPost({ onAuthorChange, onBodyChange }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
    </form>
  );
}

export default NewPost;
