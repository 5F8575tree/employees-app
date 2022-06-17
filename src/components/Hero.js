import React from "react";
import logo from "../assets/ktg2-final2arctic.png";

const Hero = () => {
  return (
    <div className="split_screen">
      <div className="left">
        <section className="copy">
          <h1>Employees Poll</h1>
          <img src={logo} alt="company_logo" />
          <p>
            Here's your chance to have <strong>your</strong> say on how we work
            together
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
