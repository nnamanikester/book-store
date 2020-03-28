import React, {Component} from "react";

class SingleBook extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      quantity: 1,
      total: this.props.prize
    }
  }

  addQuantity = () => {
    let { quantity, total } = this.state;
    let { prize } = this.props;
    this.setState({
      quantity: quantity + 1,
      total: total + prize
    })
  }
  reduceQuantity = () => {
    let { quantity, total } = this.state;
    let { prize } = this.props;
    this.setState({
      quantity: quantity > 1 ? quantity - 1 : 1,
      total: quantity > 1 ? total - prize : prize
    })
  }
  
  
  render() {
    const { name, image, date, prize, dsc } = this.props;
    return ( 
      <React.Fragment>
      <div className="product-body">
        <div className="product-image">
          <img alt="book" src={image} />
        </div>
        <div className="product-desc">
          <h2 className="title">{name}</h2>
          <div className="product-info">
            <p>
              {dsc}
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
            <span className="c-ans">{`$ ${prize}`}</span>
          </div>
          <div className="c-container">
            <span className="c-title"> Quantity: </span>
              <span className="c-ans">{this.state.quantity}</span>
            <span className="counter">
              <button onClick={this.reduceQuantity}>-</button>
              <button onClick={this.addQuantity}>+</button>
            </span>
          </div>
          <div className="c-container">
            <span className="c-title"> Total: </span>
              <span className="c-ans">{`$ ${this.state.total}`}</span>
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
