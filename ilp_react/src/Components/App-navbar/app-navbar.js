import React from "react";
// import { link } from "react-router-dom";
import './Style.css';

class app_navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className=" nav-class row ">
        <div className="title col-9"> Issue Tracker</div>
        <div className="col-1 pad-top10">
          <a href="/">Issues</a>
        </div>
        <div routerLinkActive="active" className="col-1 pad-top10">
          <a href="/newissue">New Issues</a>
        </div>
      </div>
    );
  }
}

export default app_navbar;
