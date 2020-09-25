import React from "react";
import "./Options.css";
import slugify from "slugify";

export default function Options(props) {
  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        name={slugify(props.name)}
        id={props.itemHash}
        className="feature__option"
        checked={props.option.name === props.selected[props.name].name}
        onChange={e => props.handleUpdate(props.name, props.option)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.option.name} ({props.format.format(props.option.cost)})
      </label>
    </div>
  );
}