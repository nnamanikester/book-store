import React, {Component} from "react";
import image from "../images";

class SingleBook extends Component {
  render() {
    return (
      <React.Fragment>
  
        <div className="product-body">
          <div className="product-image">
            <img alt="book" src={image.book1} />
          </div>
          <div className="product-desc">
            <h2 className="title">The Morgan Water</h2>
            <div className="product-info">
              <p>
                This is where the product description would go <br />
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
  
        <div className="checkout">
          <div className="c-name">
            <h3>THe Morgan Water</h3>
          </div>
          <div className="c-details">
            <div className="c-container">
              <span className="c-title"> Author: </span>
              <span className="c-ans"> Martin Luther</span>
            </div>
            <div className=" c-container">
              <span className="c-title"> Publish Date: </span>
              <span className="c-ans">19/04/2006 </span>
            </div>
            <div className="c-container">
              <span className="c-title"> Price: </span>
              <span className="c-ans">$ 200</span>
            </div>
            <div className="c-container">
              <span className="c-title"> Quantity: </span>
              <span className="c-ans">2</span>
              <span className="counter">
                <button>-</button>
                <button>+</button>
              </span>
            </div>
            <div className="c-container">
              <span className="c-title"> Total: </span>
              <span className="c-ans">$ 400</span>
            </div>
            <div className="c-button-container">
              <button className="c-button">Checkout</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleBook;
