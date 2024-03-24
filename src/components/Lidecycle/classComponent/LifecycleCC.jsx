import React, { Component } from "react";

export default class LifecycleCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
    };
  }

  async getUser() {
    let respons = await fetch("https://randomuser.me/api/");
    this.setState({ isLoading: true });
    return await respons.json();
  }

  componentDidMount() {
    this.getUser().then((user) => {
      this.setState({
        users: user.results,
        isLoading: false,
      });
    });
    // this.setState({ isLoading: false });
    console.log(this.state);
  }
  // this.getPerson().then((data) => {
  //   this.setState({ data });
  // });
  demolog = () => {
    // console.log(data);
    console.log(this.state);
    console.log("this.state");
  };
  render() {
    return (
      <>
        <button onClick={() => this.getUser()}>Delete</button>
        <button onClick={() => this.demolog()}>Delete</button>

        <table className="table table-bordered table-striped table-hover ">
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>age</th>
              <th>gender</th>
              <th>Id</th>
              <th>Cell</th>
            </tr>
          </thead>

          <tbody>
            <>
              {this.state.isLoading ? (
                <tr>
                  <td>
                    <h1>{this.state.isLoading ? "Loading..." : "done"}</h1>
                  </td>
                </tr>
              ) : (
                <>
                  {this.state.users.map((user, index) => (
                    <tr key={user.id.value}>
                      <td>
                        <span>
                          <img alt="pic" src={user.picture.medium} />
                        </span>
                      </td>
                      <td>
                        {user.name.first} {user.name.last}
                      </td>
                      <td>{user.dob.age}</td>
                      <td>{user.gender}</td>
                      <td>{user.id.value}</td>
                      <td>{user.cell}</td>
                    </tr>
                  ))}
                </>
              )}
            </>
          </tbody>
        </table>
      </>
    );
  }
}
