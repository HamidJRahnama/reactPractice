import React, { Component } from "react";
import PostSidebar from "./PostSidebar";
import PostContent from "./PostContent";

export default class BlogPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: null,
    };
  }

  async getPosts() {
    // fetch("https://github.com/HamidJRahnama/myApi.git")
    fetch("https://my-json-server.typicode.com/HamidJRahnama/myApi/")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    return (
      <>
        <div className=" d-flex">
          <PostSidebar />
          <PostContent />
        </div>
      </>
    );
  }
}
