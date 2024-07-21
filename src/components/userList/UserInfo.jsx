import React, { Component } from "react";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr className={this.props.data.isDone ? "table-dark" : ""}>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>
          <button onClick={() => this.props.handelDelete(this.props.data.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
