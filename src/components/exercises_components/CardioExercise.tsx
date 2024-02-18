"use client";
import React from "react";
import "../../stylesheets/WorkoutPageStyle.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const CardioExercise = () => {
  const [workout, setWorkout] = React.useState<any>(null);

  const getWorkout = async () => {
    let data: any = {
      type: "Cardio",
      imageUrl: "https://gifer.com/en/WSyZ",
      durationInMin: 30,
      exercises: [
        {
          exercise: "Arm circles",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/elbow-circles.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Benefits of arm circles in cardio: improves shoulder flexibility, warms up upper body, enhances blood circulation. Variations: forward, backward, small, large circles.",
        },
        {
          exercise: "Trunk rotation",
          videoUrl:
            "https://cdn.shopify.com/s/files/1/2422/2563/files/developing-punching-power-using-science-part-2-trunk-cable-twist.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Trunk rotation enhances cardiovascular fitness by engaging core muscles and improving circulation. Exercises like Russian twists and seated twists promote cardiovascular health.",
        },
        {
          exercise: "Jogging in place",
          videoUrl:
            "https://fitnessprogramer.com/wp-content/uploads/2021/08/High-Knee-Run.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Jogging in place boosts cardiovascular fitness, burns calories, and improves stamina. It's convenient, low-impact, and requires minimal space.",
        },
      ],
    };

    setWorkout(data);
  };

  React.useEffect(() => {
    getWorkout();
  }, []);
  return (
    <>
      <Navbar />
      {/* Exercise */}
      <div className="workout" style={{ marginTop: "7rem" }}>
        <h1 className="exercise-heading"> {workout?.type} Day</h1>
        <div className="workout__exercises">
          {workout?.exercises.map((item: any, index: number) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "workout__exercise"
                    : "workout__exercise workout__exercise--reverse"
                }
              >
                <h3>{index + 1}</h3>
                <div className="workout__exercise__image">
                  <img src={item.videoUrl} alt="" />
                </div>
                <div className="workout__exercise__content">
                  <h2>{item.exercise}</h2>
                  <span>
                    {item.sets} sets X {item.reps} reps
                  </span>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardioExercise;
