import React, { useEffect, useState } from "react";
import BlogLayout from "../../layout/BlogLayout";
import BlogCard from "../../components/card/BlogCard";
import { getBlog } from "../../blogServices/blogHTTP";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlog("posts").then((response) => {
      setPosts(response);
    });
  }, []);

  const postCard = posts.map((post) => (
    <BlogCard
      key={post.id}
      title={post.title}
      desc={post.body}
      imgUrl={post.image}
    />
  ));
  console.log(posts);
  return (
    <>
      <BlogLayout>
        <div className="col-4">{postCard}</div>
      </BlogLayout>
    </>
  );
};

export default BlogPage;
