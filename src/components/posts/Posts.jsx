import React, { Component } from "react";

export default class Posts extends Component {
  render() {
    return (
      <>
        <div className=" d-flex">
          <aside className="border-end bg-dark ">
            {/* <div className="sidebar-heading border-bottom bg-light">
              demo text
            </div> */}
            <div className="list-group">
              <ui>
                <li className="list-group-item list-group-item-action p-3">
                  post 1 post 1
                </li>
                <li className="list-group-item list-group-item-action p-3">
                  postlkkkk
                </li>
                <li className="list-group-item list-group-item-action p-3">
                  post 1
                </li>
              </ui>
            </div>
          </aside>
          <div className="container border text-primary ">
            <div className="post bg-light  text-center">
              <img
                className="img-fluid rounded "
                src="./assets/1.jpg"
                width={800}
                height={500}
                alt="post img"
              />
              <h1>post title</h1>
              <h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                dolorem deserunt quisquam dolore sit consectetur unde inventore
                nam beatae molestiae aliquam ab blanditiis quae odit quas, ipsa
                natus quia tenetur.
              </h5>
            </div>
            <div className="comments">
              <p>comments:</p>
              <div className=" comment">
                <p>comment 1</p>
              </div>
              <div className=" comment">
                <p>comment 2</p>
              </div>
              <div className=" comment">
                <p>comment 3</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
