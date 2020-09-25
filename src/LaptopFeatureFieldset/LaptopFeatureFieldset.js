import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import LaptopFeatureItem from '../LaptopFeatureItem/LaptopFeatureItem';

class LaptopFeatureFieldset extends Component {
    render() {
        const { featureOptions, selected, updateFeature, keyHash, featureName} 
        = this.props;

        const options = this.props.featureOptions.map((item, idx) => {
            const itemHash = slugify(JSON.stringify(item));

            return (
                <LaptopFeatureItem 
                    id={itemHash}
                    featureOption={featureOptions[idx]}
                    selected={selected}
                    updateFeature={updateFeature}
                    featureName={featureName}
                />
            );
        });
    
        return (
            <fieldset className="feature" key={keyHash}>
                <legend className="feature__name">
                    <h3>{featureName}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }
}

export default LaptopFeatureFieldset;