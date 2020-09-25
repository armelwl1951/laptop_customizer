import React, { Component } from 'react';
import LaptopFeatureFieldset from '../LaptopFeatureFieldset/LaptopFeatureFieldset';


class CustomizeLaptopForm extends Component {
    render () {
        const { features, selected, updateFeature } = this.props;

        const allFeatures = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <LaptopFeatureFieldset
                    featureOptions={features[feature]}
                    selected={selected}
                    updateFeature={updateFeature}
                    featureName={feature}
                    keyHash={featureHash}
                />
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {allFeatures}
            </form>
        );

    }
}

export default CustomizeLaptopForm;