import React, {Component} from "react";
import "../componentStyles/Home.css";
import image from "../images";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar />
  
        <div className="page-body">
          <Topbar />
  
          <div className="page-content">
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book1} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="title link">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book12} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="title link">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Home;
