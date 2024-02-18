import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage.js";
import ContactUsPage from "./pages/ContactUsPage.js";
import PreventionPage from "./pages/PreventionPage.js";
import LoginPage from "./pages/LoginPage.js";
import DietPage from "./pages/DietPage.js";
// Exercise Page
import ExercisePage from "./pages/ExercisePage.js";
import ChestExercise from "./components/exercises_components/ChestExercise.tsx";
import AbsExercise from "./components/exercises_components/AbsExercise.tsx";
import ShoulderExercise from "./components/exercises_components/ShoulderExercise.tsx";
import BackExercise from "./components/exercises_components/BackExercise.tsx";
import BicepExercise from "./components/exercises_components/BicepExercise.tsx";
import TricepExercise from "./components/exercises_components/TricepExercise.tsx";
import LegExercise from "./components/exercises_components/LegExercise.tsx";
import CardioExercise from "./components/exercises_components/CardioExercise.tsx";
import ForearmsExercise from "./components/exercises_components/ForearmsExercise.tsx";

// import WorkoutPage from "./components/WorkoutPage.tsx";
import CalorieIntakeReport from "./reports/CalorieIntakeReport.tsx";
import SleepReport from "./reports/SleepReport.tsx";
import StepReport from "./reports/StepsReport.tsx";
import WaterReport from "./reports/WaterReport.tsx";
import WeightReport from "./reports/WeightReport.tsx";
import WorkoutReport from "./reports/WorkoutReport.tsx";
import RegistrationPage from "./pages/RegistrationPage.js";

// Dashboard
import { DashboardLayout } from "./components/dashboard_components/DashboardLayout.jsx";
import DashboardPage from "./pages/DashboardPage.js";
import SetRoutine from "./pages/dashboard/SetRoutine.js";
import RecommendedExercisePage from "./pages/dashboard/RecommendedExercisePage.js";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route exact path="/about" Component={AboutPage} />
        <Route exact path="/contact" Component={ContactUsPage} />
        <Route exact path="/exercise" Component={ExercisePage} />
        <Route exact path="/prevention" Component={PreventionPage} />
        {/* Exercises */}
        <Route exact path="/workout/Chest" Component={ChestExercise} />
        <Route exact path="/workout/Abs" Component={AbsExercise} />
        <Route exact path="/workout/Shoulder" Component={ShoulderExercise} />
        <Route exact path="/workout/Back" Component={BackExercise} />
        <Route exact path="/workout/Biceps" Component={BicepExercise} />
        <Route exact path="/workout/Triceps" Component={TricepExercise} />
        <Route exact path="/workout/Legs" Component={LegExercise} />
        <Route exact path="/workout/Cardio" Component={CardioExercise} />
        <Route exact path="/workout/Forearms" Component={ForearmsExercise} />

        <Route path="/register" Component={RegistrationPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/diet" Component={DietPage} />

        <Route
          exact
          path="/report/Calories Intake"
          Component={CalorieIntakeReport}
        />
        <Route exact path="/report/Sleep" Component={SleepReport} />
        <Route exact path="/report/Step" Component={StepReport} />
        <Route exact path="/report/Water" Component={WaterReport} />
        <Route exact path="/report/Weight" Component={WeightReport} />
        <Route exact path="/report/Workout" Component={WorkoutReport} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardPage />} />
          <Route path="exercise" element={<RecommendedExercisePage />} />
          {/* <Route path="diet" element={<Diet />} /> */}
          <Route path="routine" element={<SetRoutine />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
