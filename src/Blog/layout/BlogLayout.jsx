import React from "react";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" container ">
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
