import React, { useState } from "react";

const CocCardSliderArrow = (props) => {
  return (
    <div
      onClick={() => props.handleClick(props.type)}
      className=" bg-info rounded-circle p-1"
    >
      <button className="btn">{props.title}</button>
    </div>
  );
};

export default CocCardSliderArrow;
