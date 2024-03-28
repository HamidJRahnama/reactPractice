import React from "react";

const PostSidebarLink = (props) => {
  return (
    <li
      onClick={() => props.handleClick(props.index)}
      className="list-group-item list-group-item-action p-3"
    >
      {props.title}
    </li>
  );
};

export default PostSidebarLink;
