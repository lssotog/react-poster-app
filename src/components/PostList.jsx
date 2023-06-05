import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { Post } from "./Post";
import { Modal } from "./Modal";

export const PostList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Luz Stella" body="Amazing!" />
      </ul>
    </>
  );
};
