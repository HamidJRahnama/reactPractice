import React from "react";
import Comment from "./Comment";

const PostComments = () => {
  return (
    <div className="comments">
      <p>comments:</p>
      <Comment comment={"some Comment"} />
    </div>
  );
};

export default PostComments;
