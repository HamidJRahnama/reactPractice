import React from "react";
import CocCard from "./CocCard";
import CocCardSliderArrow from "./CocCardSliderArrow";

const CocCardsSlider = () => {
  return (
    <div className="container d-flex align-items-center ">
      <CocCardSliderArrow title={"<="} />
      <CocCard />
      <CocCardSliderArrow title={"=>"} />
    </div>
  );
};

export default CocCardsSlider;
