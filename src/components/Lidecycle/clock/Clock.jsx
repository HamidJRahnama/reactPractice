import React, { Component } from "react";
import Time from "./Time";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ showTime: !this.state.showTime })}
        >
          {this.state.showTime ? "Hide Time" : "Show Time"}
        </button>
        {this.state.showTime ? <Time /> : null}
      </div>
    );
  }
}
