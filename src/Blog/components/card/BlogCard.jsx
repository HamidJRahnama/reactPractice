import React, { useEffect, useState } from "react";
import { getBlog } from "../../blogServices/blogHTTP";

const BlogCard = ({ title, desc, imgUrl, target }) => {
  return (
    <div className="card">
      <div className="card">
        <img className="card-img-top " src={`assets/${imgUrl}`} />
        <div className="card-body ">
          <h4 className="card-title ">{title}</h4>
          <p className=" card-text ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
