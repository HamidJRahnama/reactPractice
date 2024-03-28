import React, { Component } from "react";
import Post from "./Post";
import PostComments from "./PostComments";

export default class PostContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: null,
    };
  }

  async getComments() {
    const response = await fetch(
      `http://localhost:3001/comments?post-id=${this.props.post.id}`
    );
    return await response.json();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post.id !== this.props.post.id) {
      this.getComments().then((comments) => this.setState({ comments }));
    }
  }
  render() {
    return (
      <div className="container border text-primary ">
        <Post post={this.props.post} />
        <PostComments comments={this.state.comments} />
      </div>
    );
  }
}
