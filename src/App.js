import React, { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";
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
    <Wrapper>
      <AddUsers onAddUser={addUserHandler} />
      <UserList user={userList} />
    </Wrapper>
  );
}

export default App;
