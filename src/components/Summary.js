import React from 'react';
import Cart from './Cart';
import Total from './Total'

function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    return (
      <Cart
        key={idx}
        feature={feature}
        idx={idx}
        selected={props.selected}
      />
    )
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total 
        total={props.total}
      />
    </section>)
}

export default Summary;