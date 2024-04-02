import React from "react";

const CocCard = (props) => {
  let hero = props.hero;
  return (
    <div
      className="card text-center border border-primary shadow-0 "
      style={{ width: "18rem", height: "28rem" }}
    >
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img className="img-fluid" src="/assets/image-1.jpg" />
        <a href="#!">{/* <div className="mask"></div> */}</a>
      </div>

      <div className="card-body">
        <span>LEVEL {hero.level}</span>
        <h2 className="card-title">{hero.title}</h2>
        <p className="card-text">{hero.desc}</p>
      </div>
      <div className="card-footer bg-danger  ">
        <div className="d-flex justify-content-between   ">
          <div>
            <h4>{hero.training}</h4>
            <span>TRAINING</span>
          </div>
          <div>
            <h4>{hero.speed}</h4>
            <span>SPEED</span>
          </div>
          <div>
            <h4>{hero.cost}</h4>
            <span>COST</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocCard;
