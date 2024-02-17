import React, { useState } from "react";
import "../../stylesheets/ContactUsStyle.css";
import Lottie from "lottie-react";
import ContactSupport from "../../animations/contact_us.json";
import { isNotEmpty, validateEmail, messageHasLength } from "../../utils/utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/form/contact`;

const Login = () => {
  const [login, setContact] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // validating the data
  const validate = () => {
    let temp = {};

    temp.email = validateEmail(login.email) ? "" : "Incorrect email address";
    temp.password = isNotEmpty(login.password) ? "" : "Incorrect Password";

    setErrors({ ...temp });

    return Object.values(temp).every((value) => value === "");
  };

  // handling input fields as user types
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...login,
      [name]: value,
    });

    if (name === "email")
      setErrors({
        ...errors,
        [name]: validateEmail(e.target.value) ? "" : "Incorrect email address",
      });
    else if (name === "password")
      setErrors({
        ...errors,
        [name]: isNotEmpty(e.target.value) ? "" : "Incorrect Password",
      });
  };

  // form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validate()) {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        });

        if (response.ok) {
          setContact({ email: "", password: ""});
          toast.success("Login successfully");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error("Something went wrong :( ");
        setIsLoading(false);
      }
    } else {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="contact-us-section" style={{ marginTop: "10rem" }}>
        <div className="container">
          <h1 className="main-heading fw-bold">Login</h1>

          {/* Contact Form */}
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side Part */}
                <div className="contact-left-side col-12 col-lg-5">
                  <figure>
                    <Lottie
                      loop={true}
                      animationData={ContactSupport}
                      className="lottie-animation"
                    />
                  </figure>
                </div>

                {/* Right Side Part */}
                <div className="contact contact-right-side col-12 col-lg-7">
                  <form onSubmit={handleSubmit}>
                    {/* first row */}
                    <div className="row">
                      <div className="col-12 col-lg-12 contact-input-field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          name="email"
                          autoComplete="off"
                          value={login.email}
                          onChange={handleInput}
                          disabled={isLoading}
                        />
                        {/* validations */}
                        {errors.email && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                    </div>

                    {/* second row */}
                    <div className="row">
                      <div className="col-12 col-lg-12 contact-input-field">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          name="password"
                          autoComplete="off"
                          value={login.password}
                          onChange={handleInput}
                          disabled={isLoading}
                        />
                        {errors.password && (
                          <div className="text-danger">{errors.password}</div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="my-btn w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
