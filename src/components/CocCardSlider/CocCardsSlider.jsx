import React, { useEffect, useState } from "react";
import CocCard from "./CocCard";
import CocCardSliderArrow from "./CocCardSliderArrow";

const CocCardsSlider = () => {
  const [data, setData] = useState({
    heros: null,
  });
  useEffect(() => {
    fetch(`http://localhost:3001/cocCards`)
      .then((response) => response.json())
      .then((data) => setData({ heros: data }));
  }, []);
  const [currentIndex, setCurrentIndex] = useState(4);

  let setindex = (type) => {
    //note: از یک شروع میشه "length"
    switch (type) {
      case "next":
        if (currentIndex === data.heros.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        break;
      case "prev":
        if (currentIndex === 0) {
          setCurrentIndex(data.heros.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
        break;
    }
    // if (type == "plus") {
    //   console.log("plus");
    // } else if (type == "minus") {
    //   console.log("minus");
    // }
  };
  console.log(currentIndex);
  //   console.log(data.heros.length);
  return (
    <div className="container d-flex align-items-center ">
      {!data.heros ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CocCardSliderArrow
            title={"<="}
            type={"prev"}
            handleClick={setindex}
          />
          <CocCard hero={data.heros[currentIndex]} />
          <CocCardSliderArrow
            title={"=>"}
            type={"next"}
            handleClick={setindex}
          />
        </>
      )}
    </div>
  );
};

export default CocCardsSlider;
