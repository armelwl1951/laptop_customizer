import React from 'react';
import slugify from 'slugify';
import Item from './Item';


function Card(props) {
    const featureHash = props.feature + '-' + props.idx;
        const options = props.features[props.feature].map((item, index) => {
            return (
                <Item
                key={index} 
                item={item} 
                feature={props.feature}
                selected={props.selected}
                updateFeature={props.updateFeature}
                />
            )
        });
    return (
        <div>
            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {options}
        </fieldset>
        </div>
    );
}
export default Card;