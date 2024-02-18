import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import { AiOutlineEye } from 'react-icons/ai'
import '../stylesheets/HomeBanner1.css';
import CalorieIntakePopup from '../reports/CalorieIntakePopup.tsx';


import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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

const HomeBanner1 = () => {
  const [showCalorieIntakePopup, setShowCalorieIntakePopup] = React.useState<boolean>(false);

  const [data, setData] = React.useState<any>(null)

  const getData = async () => {
    let temp = [
      {
        name: "Calories Intake",
        value: 2000,
        unit: "kcal",
        goal: 2500,
        goalUnit: "kcal",
        lastUpdate: "17 Feb 24 05:30 PM",
      },
      {
        name: "Sleep",
        value: 8,
        unit: "hrs",
        goal: 8,
        goalUnit: "hrs",
        lastUpdate: "17 Feb 24 05:32 PM",
      },
      {
        name: "Steps",
        value: 50,
        unit: "steps",
        goal: 10000,
        goalUnit: "steps",
        lastUpdate: "17 Feb 24 04:42 PM",
      },
      {
        name: "Water",
        value: 2000,
        unit: "ml",
        goal: 3000,
        goalUnit: "ml",
        lastUpdate: "17 Feb 24 06:30 PM",
      },
      {
        name: "Weight",
        value: 75,
        unit: "kg",
        goal: 70,
        goalUnit: "kg",
        lastUpdate: "17 Feb 24 05:58 PM",
      },
      {
        name: "Workout",
        value: 2,
        unit: "days",
        goal: 6,
        goalUnit: "days",
        lastUpdate: "17 Feb 24 04:22 PM",
      },
    ];
    setData(temp)
    console.log(temp)
  }

  React.useEffect(() => {
    getData()
  }, [])

  function simplifyFraction(numerator: number, denominator: number): [number, number] {
    function gcd(a: number, b: number): number {
      return b === 0 ? a : gcd(b, a % b);
    }
    const commonDivisor: number = gcd(numerator, denominator);

    // Simplify the fraction
    const simplifiedNumerator: number = numerator / commonDivisor;
    const simplifiedDenominator: number = denominator / commonDivisor;

    return [simplifiedNumerator, simplifiedDenominator];

  }
  return (
    <>
      <section className="container">
        <div className="paddings innerWidth theme-container meters">
          <div className="theme-head flexColStart">
            <span className="primaryText">Dashboard</span>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
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

            {
              <div className="">
                {data?.length > 0 &&
                  data.map((item: any, index: number) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="card" key={index}>
                          {/* Add Icon */}
                          <div className="icon-right">
                            <i
                              className="fa-solid fa-plus"
                              onClick={() => {
                                setShowCalorieIntakePopup(true);
                              }}
                            ></i>
                          </div>

                          <div className="card-header">
                            <div className="card-header-box">
                              <div className="card-header-box-name">
                                {item.name}
                              </div>
                              <div className="card-header-box-value">
                                {item.value} {item.unit}
                              </div>
                            </div>
                            <div className="card-header-box">
                              <div className="card-header-box-name">Target</div>
                              <div className="card-header-box-value">
                                {item.goal} {item.goalUnit}
                              </div>
                            </div>
                          </div>

                          <CircularProgress
                            color="neutral"
                            determinate
                            variant="solid"
                            size="lg"
                            sx={{
                              "--CircularProgress-size": "100px",
                              "--CircularProgress-trackThickness": "10px",
                              "--CircularProgress-progressThickness": "10px",
                              margin: "5px",
                            }}
                            value={(item.value / item.goal) * 100}
                          >
                            <span className="textincircle">
                              {simplifyFraction(item.value, item.goal)[0] +
                                " / " +
                                simplifyFraction(item.value, item.goal)[1]}
                            </span>
                          </CircularProgress>

                          <button
                            onClick={() => {
                              window.location.href = `/report/${item.name}`;
                            }}
                          >
                            Show Report <AiOutlineEye />
                          </button>

                          <div className="last-update-time">
                            <span>Last Updated - {item.lastUpdate}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </div>
            }
          </Swiper>

          {showCalorieIntakePopup && (
            <CalorieIntakePopup
              setShowCalorieIntakePopup={setShowCalorieIntakePopup}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default HomeBanner1