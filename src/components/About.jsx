import React, { useState } from "react";
import { aboutDocApointData } from "../APIs/aboutDataAPI";
import { whyToChooseDocApoint } from "../APIs/aboutDataAPI";
import "../stylesheets/AboutPageStyle.css";

const About = () => {
  const [aboutData] = useState(aboutDocApointData);
  const [aboutData2] = useState(whyToChooseDocApoint);

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title pad-15">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content pad-15">
              <div className="row">
                <div className="about-text text-section pad-15">
                  <h3>
                    Welcome to <span>Care Self</span>, your trusted healthcare
                    companion
                  </h3>
                  <p>
                    Our mission is to simplify the process of finding and
                    booking appointments with healthcare professionals, making
                    quality healthcare accessible to all.
                  </p>
                </div>
              </div>

              <div className="row">
                {/* First Card */}
                <div className="about-card pad-15">
                  <h3 className="title">About Care Self</h3>
                  <div className="row">
                    <div className="timeline-box pad-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Items */}
                        {aboutData.map((element) => {
                          const { id, title, description } = element;
                          return (
                            <>
                              <div className="timeline-item" key={id}>
                                <div className="circle-dot"></div>
                                <h4 className="timeline-title">{title}</h4>
                                <p className="timeline-text">{description}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div className="about-card pad-15">
                  <h3 className="title">Why Choose Us?</h3>
                  <div className="row">
                    <div className="timeline-box pad-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Items */}
                        {aboutData2.map((element) => {
                          const { id, title, description } = element;
                          return (
                            <>
                              <div className="timeline-item" key={id}>
                                <div className="circle-dot"></div>
                                <h4 className="timeline-title">{title}</h4>
                                <p className="timeline-text">{description}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="text-section pad-15">
                  <h3 className="heading-text">Join Us on this Journey</h3>
                  <p className="my-para">
                    We're excited to have you join us on this healthcare
                    journey. Care Self is committed to redefining the way
                    patients and doctors connect, making healthcare more
                    convenient, accessible, and patient-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
