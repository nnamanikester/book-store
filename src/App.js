import React, {Component} from "react";
import "./componentStyles/Home.css";
import image from "./images";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";

class App extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar/>
  
        <div className="page-body">
          <Topbar/>
  
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
                <img alt="book" src={image.book2} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="title link">
                  The Morgan River The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book3} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="link title">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book4} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="link title">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book5} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="link title">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book6} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="link title">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book7} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="link title">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book8} />
              </div>
              <div className="p-info text-center">
                <a href="/" className="link title">
                  The Morgan River
                </a>
                <br />
                <span className="price">$ 200</span>
              </div>
            </div>
  
            <div className="product">
              <div className="p-image">
                <img alt="book" src={image.book9} />
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
                <img alt="book" src={image.book10} />
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
                <img alt="book" src={image.book11} />
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

export default App;
