import React from "react";

const CocCard = () => {
  return (
    <div
      className="card text-center border border-primary shadow-0 "
      style={{ width: "18rem" }}
    >
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img className="img-fluid" src="/assets/image-1.jpg" />
        <a href="#!">{/* <div className="mask"></div> */}</a>
      </div>

      <div className="card-body">
        <span>level 5</span>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. bulk of the card's content. bulk of the
          card's content. bulk of the card's content. bulk of the card's
          content. bulk of the card's content. bulk of the card's content. bulk
          of the card's content. bulk of the card's content. bulk of the card's
          content.
        </p>
      </div>
      <div className="card-footer jus">
        <div className="d-flex justify-content-between   ">
          <div>
            <h3>5</h3>
            <span>TRAINING</span>
          </div>
          <div>
            <h3>5</h3>
            <span>SPEED</span>
          </div>
          <div>
            <h3>5</h3>
            <span>TRAINING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocCard;
