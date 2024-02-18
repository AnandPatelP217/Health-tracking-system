import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../stylesheets/HomeBanner2.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SliderButtons = () => {
  // useSwiper Hook
  const swiper = useSwiper();

  return (
    <div className="slider-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const HomeBanner2 = () => {
  const [workouts, setWorkouts] = React.useState<any[] | null>(null);

  const getworkouts = async () => {
    let data: any = [
      {
        type: "Chest",
        image: "/images/Exercises/chest.jpg",
        durationInMin: 30,
      },
      {
        type: "Abs",
        image: "/images/Exercises/abs.jpg",
        durationInMin: 90,
      },
      {
        type: "Shoulder",
        image: "/images/Exercises/shoulder.jpg",
        durationInMin: 40,
      },
      {
        type: "Back",
        image: "/images/Exercises/back.jpg",
        durationInMin: 70,
      },
      {
        type: "Biceps",
        image: "/images/Exercises/biceps.jpg",
        durationInMin: 50,
      },
      {
        type: "Triceps",
        image: "/images/Exercises/triceps.jpg",
        durationInMin: 60,
      },

      {
        type: "Legs",
        image: "/images/Exercises/legs.jpg",
        durationInMin: 80,
      },

      {
        type: "Cardio",
        image: "/images/Exercises/cardio.jpg",
        durationInMin: 100,
      },
      {
        type: "Forearms",
        image: "/images/Exercises/forearms.jpg",
        durationInMin: 110,
      },
    ];
    setWorkouts(data);
  };
  React.useEffect(() => {
    getworkouts();
  }, []);

  return (
    <>
      <section className="glimpse container">
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">Exercises</span>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* Buttons for slider */}

            <SliderButtons />

            {workouts &&
              workouts.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flexColCenter glimpse-card">
                      <img
                        src={item.image}
                        alt="Exercise"
                        onClick={() => {
                          window.location.href = `/workout/${item.type}`;
                        }}
                      />
                      <div
                        className="exercise"
                        onClick={() => {
                          window.location.href = `/workout/${item.type}`;
                        }}
                      >
                        <span className="exercise-name">{item.type}</span>
                        <span className="time">{item.durationInMin} Min</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeBanner2;
