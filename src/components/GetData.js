import React, { Component } from "react";

export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async getdata() {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }
  componentDidMount() {
    this.getdata().then((data) => this.setState({ data }));
    console.log(this.state.data);
  }
  render() {
    return (
      <>
        <div>
          {this.state.data.map((product, index) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img
                src={product.image}
                style={{ height: "150px", width: "150px" }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
