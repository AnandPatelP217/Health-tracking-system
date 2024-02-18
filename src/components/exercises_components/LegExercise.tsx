"use client";
import React from "react";
import "../../stylesheets/WorkoutPageStyle.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LegExercise = () => {
  const [workout, setWorkout] = React.useState<any>(null);

  const getWorkout = async () => {
    let data: any = {
      type: "Legs",
      imageUrl: "https://gifer.com/en/WSyZ",
      durationInMin: 30,
      exercises: [
        {
          exercise: "Squat",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/bodyweight-squat-2.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Benefits of squats for legs: Builds strength, tones muscles, improves flexibility. Variations include goblet squats, front squats, and sumo squats for targeted benefits.",
        },
        {
          exercise: "Walking Lunges",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2023/07/bodyweight-forward-lunge.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Walking lunges target quads, hamstrings, and glutes. Benefits include strength, flexibility, and balance improvement. Variations like reverse lunges add diversity for effective leg workouts.",
        },
        {
          exercise: "Lateral Lunge",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/side-lunge.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lateral lunges improve leg strength, enhance hip flexibility, and target inner and outer thigh muscles. They also engage core for stability.",
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

export default LegExercise;
