import React, { Component } from "react";
import PostSidebarLink from "./PostSidebarLink";

export default class PostSidebar extends Component {
  render() {
    return (
      <div>
        <aside className="border-end bg-dark ">
          {/* <div className="sidebar-heading border-bottom bg-light">
              demo text
            </div> */}
          <div className="list-group">
            <ui>
              <PostSidebarLink title={"post 1 1"} />
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
      </div>
    );
  }
}
