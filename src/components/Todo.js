import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "action 1", isDone: false },
        { id: 2, text: "action 2", isDone: false },
        { id: 3, text: "action 3", isDone: true },
        { id: 4, text: "action 4", isDone: false },
      ],
    };
  }

  deleteTodo(id) {
    const newItem = this.state.todos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    this.setState({ todos: newItem });
  }
  render() {
    let todos = this.state.todos.map((todo, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{todo.text}</td>
          <td>
            <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <h1>Todo List</h1>
        <hr />
        <input type="text" />
        <button>Submit</button>
        <table className="table table-sm table-hover table-striped">
          <thead>
            <tr>
              <td>#</td>
              <th>Text</th>
              <th>Opsions</th>
            </tr>
          </thead>
          <tbody>{todos}</tbody>
        </table>
      </>
    );
  }
}
