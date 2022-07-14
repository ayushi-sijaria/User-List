import React, { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [error, setError] = useState();

  const nameRef = useRef();
  const ageRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        message: "Please enter valid input(non-empty values).",
      });
      return;
    } else if (+enteredAge < 1) {
      setError({
        message: "Age should be greater than 0.",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <Modal message={error.message} onClick={closeModal} />}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" ref={nameRef} />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" ref={ageRef} />
          </div>
          <Button type="submit" onClick={closeModal}>
            Add User
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUsers;
