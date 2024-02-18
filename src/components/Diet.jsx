import React, { useState } from "react";
import dietAPI from "../APIs/dietAPI";
import "../stylesheets/Diet.css"

const Diet = () => {
  const [data] = useState(dietAPI);

  return (
    <>
      <section className="margin-top-max container">
        <div className="row diet">
          {
            data
              .filter((item) => item.goal_name === "Weight Gain")
              .map((food) =>
                food.diet.map((element, index) => {
                  return (
                    <>
                      <div
                        className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3 diet-card"
                        key={index}
                      >
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            src={element.imagePath}
                            className="card-img-top"
                            alt="Suggestion"
                            style={{ height: "240px" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.about}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )[0]
          }
        </div>
      </section>
    </>
  );
};

export default Diet;
