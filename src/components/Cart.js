import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    console.log("props in Cart", this.props);
    const { cartOptions, selectedOptions, format } = this.props;
    const total = selectedOptions.reduce(
      (acc, curr) => acc + cartOptions[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <div className="summary__option__label" key="key value"></div>
        {selectedOptions.map(label => (
          <div className="summary__option__label" key={label}>
            {label}
            <div className="summary__option">{cartOptions[label].name}</div>
            <div className="summary__option__cost">
              {format.format(cartOptions[label].cost)}
            </div>
          </div>
        ))}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">{format.format(total)}</div>
        </div>
      </section>
    );
  }
}

export default Cart;