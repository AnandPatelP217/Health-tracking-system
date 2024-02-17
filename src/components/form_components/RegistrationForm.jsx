import React, { useState } from "react";
import "../../stylesheets/RegistrationFormStyle.css";
import Dropdown from "./Dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../store/apiurl";
const URL = `${API_URL}/api/team/register`;

const RegistrationForm = () => {
  const [selectedGender, setSelectedGender] = useState("Gender");
  // const [selectedGoal, setSelectedGoal] = useState("Your Goal");
  const [selectedDisease, setSelectedDisease] = useState("Select Disease");
  const [selectedDiseaseInFamily, setSelectedDiseaseInFamily] = useState(
    "Select Family Disease"
  );

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    // Step 1 Fields
    name: "",
    pass: "",
    confirmPass: "",
    email: "",
    dob: "",

    // Step-2 Fields (Team Members Details)
    weight: "",
    height: "",
    // date: "",
    // goal: "",
    anyDisease: "",
    anyDiseaseInFamily: "",
  });

  //for handling the form fields
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const openDashboard = () => {
    selectedDisease === "None" && selectedDiseaseInFamily === "None"
      ? (window.location.href = "/dashboard/home")
      : (window.location.href = "/prevention");
  };

  // const openPrevention = () => {
  //   window.location.href = "/prevention";
  // }

  const [step, setStep] = useState(1);

  const nextStep = () => {
    // Validate before moving to the next step
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Function to validate step before proceeding
  const validateStep = (step) => {
    switch (step) {
      case 1:
        return (
          data.name &&
          data.pass &&
          data.confirmPass &&
          data.email &&
          data.dob &&
          gender
        );
      case 2:
        return data.weight && data.height && anyDisease && anyDiseaseInFamily;

      default:
        return true;
    }
  };

  const gender = ["Male", "Female", "Other"];
  const anyDisease = ["Diabetes", "Cancer", "Heart disease", "None"];
  const anyDiseaseInFamily = ["Diabetes", "Cancer", "Heart disease", "None"];

  return (
    <section className="form-wrap">
      <div className="form-container">
        <form id="multi-step-form">
          <div
            id="form-container-box"
            style={{ display: step === 4 ? "none" : "block" }}
          >
            <h1 className="form-title">Registration Form</h1>
            <ul className="progress-bar">
              <li
                className={
                  step === 1 || step === 2 || step === 3 ? "active" : ""
                }
              >
                <span className="step-title">
                  <span>Personal</span>
                  <span>Details</span>
                </span>
              </li>
              <li
                className={
                  step === 2 || step === 3 ? "active line-bar" : "line-bar"
                }
              >
                <span className="step-title">
                  <span>Physical</span>
                  <span>Details</span>
                </span>
              </li>
              <li className={step === 3 ? "active line-bar" : "line-bar"}>
                <span className="step-title">
                  <span>Review</span>
                  <span>Details</span>
                </span>
              </li>
            </ul>

            {/* <<<<< Step 1 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 1 ? "block" : "none" }}
            >
              {/* Step 1 content */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-field"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <Dropdown
                    selected={selectedGender}
                    setSelected={setSelectedGender}
                    options={gender}
                    color={
                      selectedGender === "Gender"
                        ? "#cac1ce"
                        : "var(--text-black-700)"
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="DOB"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    class="form-field"
                    name="dob"
                    value={data.dob}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="password"
                    class="form-field"
                    placeholder="Password"
                    name="pass"
                    value={data.pass}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-field"
                    placeholder="Confirm Password"
                    name="confirmPass"
                    value={data.confirmPass}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="form-box">
                <div className="btn-step">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(step)}
                  >
                    Next &#65515;
                  </button>
                </div>
              </div>
            </div>

            {/* <<<<< Step 2 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 2 ? "block" : "none" }}
            >
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="number"
                    class="form-field"
                    placeholder="Weight"
                    name="weight"
                    value={data.weight}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-field"
                    placeholder="Height"
                    name="height"
                    value={data.height}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <Dropdown
                    selected={selectedDisease}
                    setSelected={setSelectedDisease}
                    options={anyDisease}
                    color={
                      selectedDisease === "Select Disease"
                        ? "#cac1ce"
                        : "var(--text-black-700)"
                    }
                  />
                </div>
                <div class="form-group">
                  <Dropdown
                    selected={selectedDiseaseInFamily}
                    setSelected={setSelectedDiseaseInFamily}
                    options={anyDiseaseInFamily}
                    color={
                      selectedDiseaseInFamily === "Select Family Disease"
                        ? "#cac1ce"
                        : "var(--text-black-700)"
                    }
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="form-box">
                <div className="btn-step">
                  <button type="button" onClick={prevStep}>
                    &#65513; Prev
                  </button>
                  <button type="button" onClick={nextStep}>
                    Next &#65515;
                  </button>
                </div>
              </div>
            </div>

            {/* <<<<< Step 3 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 3 ? "block" : "none" }}
            >
              <div className="review-title">Team Details</div>

              <div className="review-box">
                <div className="form-group data">
                  <span className="data-heading">Name</span>
                  <span className="data-value">{data.name}</span>
                </div>

                <div className="form-group data">
                  <span className="data-heading">Email</span>
                  <span className="data-value">{data.email}</span>
                </div>
              </div>

              <div className="review-box">
                <div className="form-group data">
                  <span className="data-heading">Gender</span>
                  <span className="data-value">{selectedGender}</span>
                </div>

                <div className="form-group data">
                  <span className="data-heading">DOB</span>
                  <span className="data-value">{data.dob}</span>
                </div>
              </div>

              <div className="review-title">Physical Details</div>
              <div className="review-box">
                <div className="form-group data">
                  <span className="data-heading">Weight</span>
                  <span className="data-value">{data.weight}</span>
                </div>

                <div className="form-group data">
                  <span className="data-heading">Height</span>
                  <span className="data-value">{data.height}</span>
                </div>
              </div>

              <div className="review-box">
                <div className="form-group data">
                  <span className="data-heading">Disease</span>
                  <span className="data-value">{selectedDisease}</span>
                </div>

                <div className="form-group data">
                  <span className="data-heading">Family Member Disease</span>
                  <span className="data-value">{selectedDiseaseInFamily}</span>
                </div>
              </div>

              <div className="form-box">
                <div className="btn-step">
                  <button type="button" onClick={prevStep}>
                    &#9998; Edit
                  </button>
                  <button
                    type="button"
                    onClick={openDashboard}
                  >
                    Submit &#65515;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Success box */}
          <div
            id="success-box"
            style={{ display: step === 4 ? "flex" : "none" }}
          >
            <span className="done">&#10004;</span>
            <p className="success-text">
              Your Form has submitted successfully!
            </p>
            <button
              type="button"
              id="reset-btn"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
