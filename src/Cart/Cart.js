import React, { Component } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import CartTotal from '../CartTotal/CartTotal';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

class Cart extends Component {
    render () {
        const { selected } = this.props;

        return (
            <section className="main__summary">
                <CartSummary
                    USCurrencyFormat={USCurrencyFormat}
                    selected={selected}
                />
                <CartTotal
                    USCurrencyFormat={USCurrencyFormat}
                    selected={selected}
                />
            </section>
        );
    }
}

export default Cart;