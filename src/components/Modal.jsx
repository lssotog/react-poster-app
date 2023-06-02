import classes from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};
