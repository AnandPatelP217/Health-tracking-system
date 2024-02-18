import React, { useState } from "react";
import "../stylesheets/PreventionsStyle.css";
import diseaseData from "../APIs/diseaseAPI";

const Prevention = () => {
  const [suggestion] = useState(diseaseData);

  return (
    <>
      {/* First Part */}
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-6 text-center our-service-left-side-img">
              <img src="./images/suggestion.jpg" alt="Suggested Diet" />
            </div>

            <div className="col-12 col-lg-6 our-services-list">
              <h1 className="main-heading">Which Diet You Should Follow?</h1>

              {
                suggestion
                  .filter((disease) => disease.disease_name === "Cancer")
                  .map((disease) =>
                    disease.suggested_foods.map((food, index) => {
                      return (
                        <>
                          <div className="row our-services-info" key={index}>
                            <div className="col-1 our-services-number">
                              {index + 1}
                            </div>
                            <div className="col-10 our-services-data">
                              <h2 className="sub-heading">{food.foodName}</h2>
                              <p className="paragraph">{food.about}</p>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )[0]
              }

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Part */}
      <section className="common-section our-services our-services-right-side">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-6 our-services-right-side-content d-flex justify-content-center align-items-start flex-column order-lg-first order-last">
              <h1 className="main-heading">What should you Ignore?</h1>
              {
                suggestion
                  .filter((disease) => disease.disease_name === "Cancer")
                  .map((disease) =>
                    disease.avoiding_foods.map((food, index) => {
                      return (
                        <>
                          <div className="row our-services-info" key={index}>
                            <div className="col-1 our-services-number">
                              {index + 1}
                            </div>
                            <div className="col-10 our-services-data">
                              <h2 className="sub-heading">{food.foodName}</h2>
                              <p className="paragraph">{food.about}</p>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )[0]
              }

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>

            <div className="col-12 col-lg-6 text-center our-service-right-side-img order-md-first order-sm-first">
              <img src="./images/ignore.jpg" alt="Customer Support" />
            </div>
          </div>
        </div>
      </section>

      {/* Third Part */}
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-6 text-center our-service-left-side-img">
              <img src="./images/exercise.jpg" alt="Suggested Diet" />
            </div>

            <div className="col-12 col-lg-6 our-services-list">
              <h1 className="main-heading">Please Follow These Exercises?</h1>

              {
                suggestion
                  .filter((disease) => disease.disease_name === "Cancer")
                  .map((disease) =>
                    disease.dailyExercise.map((exercise, index) => {
                      return (
                        <>
                          <div className="row our-services-info" key={index}>
                            <div className="col-1 our-services-number">
                              {index + 1}
                            </div>
                            <div className="col-10 our-services-data">
                              <h2 className="sub-heading">{exercise.exerciseName}</h2>
                              <p className="paragraph">{exercise.about}</p>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )[0]
              }

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prevention;
