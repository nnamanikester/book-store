import React from 'react'
import {Link} from 'react-router-dom'

function Book(props) {
    return (
        <React.Fragment>
          <div className="product">
            <div className="p-image">
              <img alt="book" src={props.image} />
            </div>
            <div className="p-info text-center">
              <Link to={`books/${props.id}`} className="title link">{props.name}</Link>
              <br />
              <span className="price">{props.prize}</span>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Book
