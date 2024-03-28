import React from "react";

const Comment = (props) => {
  return (
    <div className=" comment">
      <p>
        {props.index + 1}-{props.comment}
      </p>
    </div>
  );
};

export default Comment;
