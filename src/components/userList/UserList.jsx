import React, { Component } from "react";
import MainContext from "../../context/mainContext";
import UserInfo from "./UserInfo";

class UserList extends Component {
  render() {
    let [state, setState] = this.context;

    const deleteUser = (id) => {
      let newData = state.users.filter((user) => user.id !== id);

      setState({ ...state, users: newData });
    };

    const user = state.users.map((user) => (
      <UserInfo data={user} handelDelete={(id) => deleteUser(id)} />
    ));
    return (
      <>
        <h1>Users</h1>
        <hr />
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{user}</tbody>
        </table>
      </>
    );
  }
}

UserList.contextType = MainContext;
export default UserList;
