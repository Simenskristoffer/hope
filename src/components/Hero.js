import React from "react";
import Navbar from "../components/Navbar";

const Hero = ({ title, img, subtitle, className }) => {
  return (
    <>
      <div
        className='full-width-image-container margin-top-0 site-hero'
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
            !!img.childImageSharp ? img.childImageSharp.fluid.src : img
          })`
        }}
      >
        <Navbar />
        <h2 className='has-text-weight-bold is-size-2'>{title}</h2>
        {subtitle ? <h3>{subtitle}</h3> : <></>}
      </div>
    </>
  );
};

export default Hero;
