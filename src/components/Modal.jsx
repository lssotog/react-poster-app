import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

export const Modal = ({ children }) => {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};
