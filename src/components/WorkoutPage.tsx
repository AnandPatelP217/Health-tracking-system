"use client";
import React from "react";
import "../stylesheets/WorkoutPageStyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WorkoutPage = () => {
  const [workout, setWorkout] = React.useState<any>(null);

  const getworkout = async () => {
    let data: any = {
      type: "Chest",
      imageUrl: "https://gifer.com/en/WSyZ",
      durationInMin: 30,
      exercises: [
        {
          exercise: "Bench Press",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/dumbbell-chest-fly-muscles.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          exercise: "Push Up",
          videoUrl:
            "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/incline-push-up-bench.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          exercise: "Chest Stretch",
          videoUrl:
            "https://i.pinimg.com/originals/f9/69/17/f96917eca63c436bcd85f7798a38aaac.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
      ],
    };

    setWorkout(data);
  };

  React.useEffect(() => {
    getworkout();
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

export default WorkoutPage;
