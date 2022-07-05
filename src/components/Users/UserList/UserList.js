import Card from "../../UI/Card/Card";
import User from "./User/User";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.user.map((u) => (
          <User name={u.name} age={u.age} key={Math.random()} />
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
