import React from "react";
import Features from "./Features";

export default function MainForm(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    return (
      <Features
        key={featureHash}
        featureHash={featureHash}
        className="feature__item"
        feature={props.features[feature]}
        name={feature}
        handleUpdate={props.handleUpdate}
        format={props.format}
        selected={props.selected}
      />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}