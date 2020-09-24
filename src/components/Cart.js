import React from 'react';
import { USCurrencyFormat } from '../Helpers';
import Total from './Total'

function Cart(props) {
    const featureHash = props.feature + '-' + props.idx;
        const selectedOption = props.selected[props.feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
}

export default Cart;