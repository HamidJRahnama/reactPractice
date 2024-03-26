import React from "react";

const Post = () => {
  return (
    <div className="post bg-light  text-center">
      <img
        className="img-fluid rounded "
        src="assets/image-1.jpg"
        width={800}
        height={500}
        alt="post img"
      />
      <h1>post title</h1>
      <h5>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe dolorem
        deserunt quisquam dolore sit consectetur unde inventore nam beatae
        molestiae aliquam ab blanditiis quae odit quas, ipsa natus quia tenetur.
      </h5>
    </div>
  );
};

export default Post;
