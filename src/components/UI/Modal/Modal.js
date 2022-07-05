import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./Modal.module.css";
const Modal = (props) => {
  const closeModalHandler = () => {
    props.onClick();
  };
  return (
    <div onClick={props.onClick}>
      <div className={classes.backdrop}></div>
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
    </div>
  );
};
export default Modal;
