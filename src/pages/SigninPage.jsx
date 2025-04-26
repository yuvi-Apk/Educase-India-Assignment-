import React, { useState } from "react";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handelFormSubmit = (e) => {
    e.preventDefault(); // Corrected method
    console.log(formData);
  };

  return (
    <div className="layout">
      {/* text - content  */}

      <div className="text-content">
        <h2>Signin to your PopX account</h2>
        <p className="sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
          possimus!
        </p>
      </div>

      {/* form content  */}
      <div >
        <form className="mt-2!" onSubmit={handelFormSubmit}>

          <div className="form-item">
            <p className="formLabel">Email Address <span>*</span></p>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) => {
                {
                  setFormData({ ...formData, email: e.target.value });
                }
              }}
              autoComplete="off"
              className="form-style"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="form-item">
            <p className="formLabel">Password <span>*</span></p>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) => {
                {
                  setFormData({ ...formData, password: e.target.value });
                }
              }}
              autoComplete="off"
              className="form-style"
              placeholder="Enter password"
              required
            />
          </div>

          <button className="button-layout primary-button-color" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
