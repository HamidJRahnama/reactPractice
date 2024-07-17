import React, { Component } from "react";

export default class Boxs extends Component {
  state = {
    boxes: [
      { id: 1, title: "box 1" },
      { id: 2, title: "box 2" },
      { id: 3, title: "box 3" },
      { id: 4, title: "box 4" },
    ],
    activeToggle: [1, 4],
  };

  handelClick(id) {
    const activeToggle = [...this.state.activeToggle];

    if (this.state.activeToggle.includes(id)) {
      activeToggle.splice(activeToggle.indexOf(id), 1);
    } else {
      activeToggle.push(id);
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        activeToggle,
      };
    });
  }
  render() {
    const toggle = this.state.boxes.map((box, index) => {
      return (
        <div key={index}>
          <span>{box.title}</span>
          <label>
            <input
              onClick={() => this.handelClick(box.id)}
              type="checkbox"
              checked={this.state.activeToggle.includes(box.id)}
            />
          </label>
        </div>
      );
    });

    const box = this.state.boxes.map((box, index) => {
      if (this.state.activeToggle.includes(box.id)) {
        return (
          <div key={index} className="box">
            <span>{box.title}</span>
          </div>
        );
      }
    });
    return (
      <>
        {toggle}

        {box}
      </>
    );
  }
}
