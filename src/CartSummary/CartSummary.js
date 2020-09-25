import React, { Component } from 'react';

class CartSummary extends Component {
    render() {
        const { selected, USCurrencyFormat } = this.props;

        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + "-" + idx;
            const selectedOption = selected[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h2>Your cart</h2>
                {summary}
            </div>
        );
    }
}

export default CartSummary;