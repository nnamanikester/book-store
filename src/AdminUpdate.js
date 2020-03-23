import React from "react";
import "./AdminPost.css";
import image from "./images";

function AdminUpdate() {
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
            <h2 className="text-white title">Edit This Morgan Water</h2>
          </div>
        </div>

        <div className="page-content">
          <div className="form">
            <div className="form-item">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Book Title..."
                value="This Morgan Water"
              />
            </div>
            <div className="form-item">
              <label>Author:</label>
              <input
                type="text"
                placeholder="Author Name..."
                value="Martin Luther"
              />
            </div>
            <div className="form-item">
              <label>Publish Date:</label>
              <input
                type="date"
                placeholder="Publish Date..."
                value="20/11/2020"
              />
            </div>
            <div className="form-item">
              <label>Price:</label>
              <input type="number" placeholder="Price..." value="150" />
            </div>
            <div className="form-item">
              <label>Description:</label>
              <textarea rows="8" placeholder="Book Description...">
                This is the Morgan Water Description...
              </textarea>
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

export default AdminUpdate;
