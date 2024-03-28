import React from "react";
import PostSidebarLink from "./PostSidebarLink";

const PostSidebar = (props) => {
  const link = props.posts
    ? props.posts.map((post, index) => (
        <PostSidebarLink
          key={post.id}
          title={post.title}
          index={index}
          handleClick={props.changeCurrentPostIndex}
        />
      ))
    : null;
  return (
    <div>
      <button onClick={() => props.changeCurrentPostIndex(7)}>
        index sidebar
      </button>
      <aside className="border-end bg-dark text-light ">
        <div className="">
          <ui>{link}</ui>
        </div>
      </aside>
    </div>
  );
};

export default PostSidebar;
