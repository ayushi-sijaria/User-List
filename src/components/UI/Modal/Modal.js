import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.onClick();
  };
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Invalid Form</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onclick={closeModalHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorModal message={props.message} onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
