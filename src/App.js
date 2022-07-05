import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers/AddUsers";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prev) => {
      return [
        ...prev,
        {
          name: uName,
          age: uAge,
        },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList user={userList} />
    </div>
  );
}

export default App;
