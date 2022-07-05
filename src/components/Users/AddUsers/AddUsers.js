import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitFormHandler = (event) => {
    event.preventDefault();
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
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const closeModal = () => {
    setError(null);
  };

  return (
    <div>
      {error && <Modal message={error.message} onClick={closeModal} />}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
          </div>
          <Button type="submit" onClick={closeModal}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUsers;
