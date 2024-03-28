import React from "react";
import Comment from "./Comment";

const PostComments = (props) => {
  let comment = props.comments ? (
    props.comments.map((comment, index) => (
      <Comment key={comment.id} comment={comment.body} index={index} />
    ))
  ) : (
    <Comment comment={"There is no comments about this post :)"} />
  );
  console.log(comment);
  return (
    <div className="comments">
      <p>comments:</p>
      {comment}
      {/* <Comment comment={"some Comment"} /> */}
    </div>
  );
};

export default PostComments;
