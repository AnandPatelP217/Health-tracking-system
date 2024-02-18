"use client";
import React from "react";
import "../../stylesheets/WorkoutPageStyle.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ShoulderExercise = () => {
  const [workout, setWorkout] = React.useState<any>(null);

  const getWorkout = async () => {
    let data: any = {
      type: "Shoulder",
      imageUrl: "https://gifer.com/en/WSyZ",
      durationInMin: 30,
      exercises: [
        {
          exercise: "Dumbbell Shoulder Press",
          videoUrl:
            "https://homeworkouts.org/wp-content/uploads/anim-dumbbell-shoulder-press.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Benefits of dumbbell shoulder press: Targets deltoids for strength and size. Improves shoulder stability. Variations include seated, standing, and Arnold press for added challenge.",
        },
        {
          exercise: "Face Pull",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-face-pull.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Face pulls target rear deltoids and upper traps, improving shoulder stability and posture. Use a cable machine, pull towards face, emphasizing contraction for shoulder health and aesthetics.",
        },
        {
          exercise: "Standing Military Tress",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/push-press.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Benefits of standing military press: Builds shoulder strength, stability, and muscle mass. Variations include dumbbell press, barbell press, and kettlebell press.",
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

export default ShoulderExercise;
