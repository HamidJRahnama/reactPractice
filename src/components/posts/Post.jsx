import React from "react";

const Post = (props) => {
  let post = props.post;
  return (
    <div className="post bg-light  text-center">
      <img
        className="img-fluid rounded "
        src={`assets/${post.image}`}
        alt={post.title}
        // src="assets/image-1.jpg"
        width={800}
        height={500}
      />
      <h1>{post.title}</h1>
      <h5>
        {post.body}
        <span> - {post.author}</span>
      </h5>
    </div>
  );
};

export default Post;
