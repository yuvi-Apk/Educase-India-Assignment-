import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="layout flex justify-end flex-col pb-10!">
      {/* text part  */}
      <div>
        <h2>Welcome to PopX</h2>
        <p className="sub-heading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          hic?
        </p>
      </div>

      {/* button part of the home page  */}

      <div className="mt-5!">
        <Link to={"/signup"}>
          <button className="button-layout primary-button-color mt-1.5!">
            Create Account
          </button>
        </Link>
        <Link to={"/signin"}>
          <button className="button-layout text-black! mt-2! Secondary-button-color">
            Already Registered?Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
