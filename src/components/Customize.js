import React from 'react';
import slugify from 'slugify';
import Card from './Card';
import Item from './Item';

function Customize(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        
        return (
            <Card
        key={idx}
        selected={props.selected}
        features={props.features}
        feature={feature}
        idx={idx}
        updateFeature={props.updateFeature}
        />
        );
    });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}

export default Customize;