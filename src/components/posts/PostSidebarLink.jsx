import React from "react";

const PostSidebarLink = (props) => {
  return (
    <li className="list-group-item list-group-item-action p-3">
      {props.title}
    </li>
  );
};

export default PostSidebarLink;
