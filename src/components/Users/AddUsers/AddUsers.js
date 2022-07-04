import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./AddUsers.module.css";

const AddUsers = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUsers;
