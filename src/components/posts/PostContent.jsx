import React, { Component } from "react";
import Post from "./Post";
import PostComments from "./PostComments";

export default class PostContent extends Component {
  render() {
    return (
      <div className="container border text-primary ">
        <Post />
        <PostComments />
      </div>
    );
  }
}
