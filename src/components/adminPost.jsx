import React from "react";
import "../componentStyles/AdminPost.css";
import image from "../images";

function AdminPost() {
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
            <h2 className="text-white title">Post A Book</h2>
          </div>
        </div>

        <div className="page-content">
          <div className="form">
            <div className="form-item">
              <label>Title:</label>
              <input type="text" placeholder="Book Title..." />
            </div>
            <div className="form-item">
              <label>Author:</label>
              <input type="text" placeholder="Author Name..." />
            </div>
            <div className="form-item">
              <label>Publish Date:</label>
              <input type="date" placeholder="Publish Date..." />
            </div>
            <div className="form-item">
              <label>Price:</label>
              <input type="number" placeholder="Price..." />
            </div>
            <div className="form-item">
              <label>Description:</label>
              <textarea rows="8" placeholder="Book Description..."></textarea>
            </div>
            <div className="form-item">
              <label>Image:</label>
              <input type="file" placeholder="Upload Image" />
            </div>
          </div>
          <div className="form-button">
            <button>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPost;
