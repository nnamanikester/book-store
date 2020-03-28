import React from 'react'

function Book({ id, image, name, prize }) {
    return (
        <React.Fragment>
          <div className="product">
            <div className="p-image">
              <img alt="book" src={image} />
            </div>
            <div className="p-info text-center">
              <span className="title link">{name}</span>
              <br />
              <span className="price">{prize}</span>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Book
