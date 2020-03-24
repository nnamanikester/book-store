import React from "react";

const SingleBook = ({match, id, name, image, date, prize, description}) => {
  console.log(match)
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div className="product-body">
        <div className="product-image">
          <img alt="book" src={image} />
        </div>
        <div className="product-desc">
          <h2 className="title">{name}</h2>
          <div className="product-info">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="checkout">
        <div className="c-name">
          <h3>{name}</h3>
        </div>
        <div className="c-details">
          <div className="c-container">
            <span className="c-title"> Author: </span>
            <span className="c-ans"> {name}</span>
          </div>
          <div className=" c-container">
            <span className="c-title"> Publish Date: </span>
            <span className="c-ans">{date} </span>
          </div>
          <div className="c-container">
            <span className="c-title"> Price: </span>
            <span className="c-ans">{prize}</span>
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
  )
}


export default SingleBook;
