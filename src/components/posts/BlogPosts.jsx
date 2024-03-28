import React, { Component } from "react";
import PostSidebar from "./PostSidebar";
import PostContent from "./PostContent";

export default class BlogPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      currentPostIndex: null,
    };
  }

  async getPost() {
    const posts = await fetch("http://localhost:3001/posts");
    return await posts.json();
  }

  componentDidMount() {
    this.getPost().then((posts) =>
      this.setState({ posts, currentPostIndex: 1 })
    );
  }
  changeCurrentPostIndex(index) {
    this.setState({ currentPostIndex: index });
  }
  render() {
    return (
      <>
        <button onClick={() => this.changeCurrentPostIndex(2)}>index</button>
        <div className=" d-flex">
          <PostSidebar
            changeCurrentPostIndex={this.changeCurrentPostIndex.bind(this)}
            posts={this.state.posts}
          />
          {this.state.posts ? (
            <PostContent post={this.state.posts[this.state.currentPostIndex]} />
          ) : null}
        </div>
      </>
    );
  }
}
// {
//   "id": 4,
//   "post-id": 2,
//   "body": " Such a profound way to describe the maintenance work on such an iconic structure. It really puts into perspective the effort required to keep it looking fresh and vibrant."
// },
