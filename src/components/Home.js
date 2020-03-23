import React from "react";
import "../componentStyles/Home.css";
import image from "../images";

function Home() {
  return (
    <div className="page">
      <div className="sidebar">
        <div className="logo">
          <img alt="logo" src={image.logo} />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a className="link active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="/">
                About
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Services
              </a>
            </li>
            <li>
              <a className="link" href="/">
                DMCA
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Post Book
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-body">
        <div className="topbar">
          <div className="search-bar">
            <input
              className="search-box"
              type="text"
              placeholder="Search Book..."
            />
          </div>
        </div>

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

export default Home;
