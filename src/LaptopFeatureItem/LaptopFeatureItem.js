import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class LaptopFeatureItem extends Component {
    render() {
        const { id, featureOption, selected, updateFeature, featureName} 
        = this.props;

        return (
            <div key={id} className="feature__item">
                <input
                    type="radio"
                    id={id}
                    className="feature__option"
                    name={slugify(featureOption.name)}
                    checked={
                        featureOption.name ===
                        selected[featureOption.name]
                    }
                    onChange={(e) =>
                        updateFeature(featureName,featureOption)
                    }
                />
                <label htmlFor={id} className="feature__label">
                    {featureOption.name} (
                    {USCurrencyFormat.format(featureOption.cost)})
                </label>
          </div>
        );
    }
}

export default LaptopFeatureItem;