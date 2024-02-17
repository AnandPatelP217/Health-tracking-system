import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage.js";
import ContactUsPage from "./pages/ContactUsPage.js";
import ExercisePage from "./pages/ExercisePage.js";
import PreventionPage from "./pages/PreventionPage.js";

import WorkoutPage from "./components/WorkoutPage.tsx";
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


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route exact path="/about" Component={AboutPage} />
        <Route exact path="/contact" Component={ContactUsPage} />
        <Route exact path="/exercise" Component={ExercisePage} />
        <Route exact path="/prevention" Component={PreventionPage} />
        <Route exact path="/workout/Chest" Component={WorkoutPage} />
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
        <Route path="/register" Component={RegistrationPage} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardPage />} />
          <Route path="exercise" element={<ExercisePage />} />
          {/* <Route path="diet" element={<Diet />} /> */}
          <Route path="routine" element={<SetRoutine />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
