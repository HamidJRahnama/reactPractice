import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timer: new Date().toLocaleString() });
      console.log(this.state.timer);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <h1>{this.state.timer}</h1>;
  }
}
