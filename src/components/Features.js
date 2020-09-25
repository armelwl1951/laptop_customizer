import React from "react";
import slugify from "slugify";
import Options from "./Options";
import "./Features.css";

export default function Features(props) {
  const options = props.feature.map(option => {
    const itemHash = slugify(JSON.stringify(option));
    return (
      <Options
        key={itemHash}
        itemHash={itemHash}
        name={props.name}
        option={option}
        selected={props.selected}
        handleUpdate={props.handleUpdate}
        format={props.format}
      />
    );
  });

  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      {options}
    </fieldset>
  );
}