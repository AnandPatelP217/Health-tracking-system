"use client";
import React from "react";
import "../../stylesheets/WorkoutPageStyle.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const TricepExercise = () => {
  const [workout, setWorkout] = React.useState<any>(null);

  const getWorkout = async () => {
    let data: any = {
      type: "Triceps",
      imageUrl: "https://gifer.com/en/WSyZ",
      durationInMin: 30,
      exercises: [
        {
          exercise: "Overhead Triceps Extension",
          videoUrl:
            "https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Overhead triceps extension isolates and strengthens triceps, promoting muscle growth and improved arm strength. Variations include dumbbell, barbell, and cable extensions for versatility.",
        },
        {
          exercise: "Rope Push-Downs",
          videoUrl:
            "https://newlife.com.cy/wp-content/uploads/2019/11/02001301-Cable-Pushdown-with-rope-attachment_Upper-Arms_360.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Rope pushdowns isolate triceps, promoting muscle growth and strength. Variations like single-arm or reverse grip enhance targeting for well-rounded triceps development.",
        },
        {
          exercise: "Diamond Pushup",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2021/08/diamond-pushup.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Diamond push-ups target triceps, chest, and shoulders. The close hand position increases triceps activation, promoting muscle growth and strength.",
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

export default TricepExercise;
