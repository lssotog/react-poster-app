import NewPost from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

export const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Misito" body="React.js is awesome!" />
        <Post author="Luz Stella" body="Amazing!" />
      </ul>
    </>
  );
};
