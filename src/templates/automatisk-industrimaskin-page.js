import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Navbar from "../components/Navbar";
import Tjenester from "../components/Tjenester";

export const AutomatiskIndustrimaskinPageTemplate = ({
  title,
  heading,
  technicalInfo,
  subheading,
  image
}) => (
  <div className='content'>
    <div
      className='full-width-image-container margin-top-0'
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: "650px"
      }}
    >
      <h2
        className='has-text-weight-bold is-size-1'
        style={{
          color: "white",
          padding: "1rem"
        }}
      >
        {title}
      </h2>
    </div>
    <section className='section is-large'>
      <div className='container has-text-centered'>
        <h1 className='title heading' style={{ color: "#515B69" }}>
          {heading}
        </h1>
        <h2 className='subtitle subheading' style={{ color: "#89919F" }}>
          {subheading}
        </h2>
        <p style={{ color: "#515B69" }}>{technicalInfo}</p>
      </div>
    </section>
    <Tjenester />
  </div>
);

AutomatiskIndustrimaskinPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  technicalInfo: PropTypes.object
};

const AutomatiskIndustrimaskinPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AutomatiskIndustrimaskinPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        technicalInfo={frontmatter.technicalInfo}
      />
    </Layout>
  );
};

AutomatiskIndustrimaskinPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AutomatiskIndustrimaskinPage;

export const pageQuery = graphql`
  query AutomatiskIndustrimaskinPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "automatisk-industrimaskin-page" } }
    ) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        technicalInfo
      }
    }
  }
`;
