import React, {Component} from "react";
import "../componentStyles/Home.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Books from "./books";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar />
  
        <div className="page-body">
          <Topbar />
  
          <div className="page-content">
            <Books />

          </div>
        </div>
      </div>
    );

  }
}

export default Home;
