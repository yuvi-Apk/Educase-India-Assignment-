import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const isAgencyOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const localStorageData = localStorage.getItem("LoggedInUser");
  
    // For first time user when no data exists
    if (!localStorageData) {
      const newUserArray = [formData]; // Store as array from beginning
      localStorage.setItem("LoggedInUser", JSON.stringify(newUserArray));
      toast.success("Successfully Registered!");
      navigate("/signin");
      return;
    }
  
    // For existing users
    try {
      const existingUsers = JSON.parse(localStorageData);
      const users = Array.isArray(existingUsers) ? existingUsers : [existingUsers];
  
      // Check if email already exists
      const emailExists = users.some(user => user.email === formData.email);
      
      if (emailExists) {
        toast.error("Your email is already registered.");
        navigate("/");
        return;
      }
  
      // Add new user
      users.push(formData);
      localStorage.setItem("LoggedInUser", JSON.stringify(users));
      toast.success("Successfully Registered!");
      navigate("/signin");
      
    } catch (error) {
      console.error("Error processing user data:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="layout ">
      {/* text-content  */}
      <div>
        <h2>Create your PopX account</h2>
      </div>

      {/* form content  */}

      <div>
        <form onSubmit={handelFormSubmit}>
          <div className="form-item">
            <p className="formLabel">
              Full Name<span>*</span>
            </p>
            <input
              className="form-style"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
              placeholder="yubraj mahanta"
              required
            />
          </div>

          <div className="form-item">
            <p className="formLabel">
              Phone Number<span>*</span>
            </p>
            <input
              className="form-style"
              type="tel"
              name="number"
              id="number"
              value={formData.number}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  number: e.target.value,
                });
              }}
              placeholder="xxxxx4547"
              required
            />
          </div>

          <div className="form-item">
            <p className="formLabel">
              Email address<span>*</span>
            </p>
            <input
              className="form-style"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              placeholder="yuvi@gmail.com"
              required
            />
          </div>

          <div className="form-item">
            <p className="formLabel">
              Password<span>*</span>
            </p>
            <input
              className="form-style"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
              placeholder="*******"
              required
            />
          </div>

          <div className="form-item">
            <p className="formLabel">
              Company Name<span>*</span>
            </p>
            <input
              className="form-style"
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  company: e.target.value,
                });
              }}
              placeholder="2dbuddy pvt ltd."
              required
            />
          </div>
          {/* radio buttoon  test  */}

          <div className="">
            <p className="block text-left! ">
              Are you an Agency?<span>*</span>
            </p>
            {/* looping to dispaly radio button value  */}
            <div className="flex gap-2.5">
            {isAgencyOptions.map((option) => {
              return (
                <div key={option.value}>
                  <input
                    type="radio"
                    name="isAgency"
                    id={`isAgency-${option.value}`}
                    value={option.value}
                    checked={formData.isAgency === option.value}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        isAgency: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor={`isAgency-${option.value}`}>
                    {option.label}
                  </label>
                </div>
              );
            })}
            </div>

          </div>

            {/* submit button  */}
            <div className="relative">
            <button
            type="submit"
            className="button-layout primary-button-color absolute top-30"
          >
            Create Account
          </button>

            </div>

        </form>
      </div>
    </div>
  );
};

export default SignupPage;
