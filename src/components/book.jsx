import React from 'react'

function Book(props) {
    return (
        <React.Fragment>
            <div className="product">
              <div className="p-image">
                    <img alt="book" src="" />
              </div>
              <div className="p-info text-center">
                <a href="/" className="title link">
                  {props.name}
                </a>
                <br />
                    <span className="price">{props.prize}</span>
              </div>
            </div>
        </React.Fragment>
    )
}

export default Book
