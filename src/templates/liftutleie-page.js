import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Navbar from "../components/Navbar";

export const LiftutleiePageTemplate = ({ title, heading, technicalInfo }) => (
  <div>
    <h1>{title}</h1>
    <h1>{heading}</h1>
    <h1>{technicalInfo}</h1>
    <h1>{heading}</h1>
  </div>
);

LiftutleiePageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  technicalInfo: PropTypes.object
};

const LiftutleiePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LiftutleiePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        technicalInfo={frontmatter.technicalInfo}
      />
    </Layout>
  );
};

LiftutleiePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default LiftutleiePage;

export const pageQuery = graphql`
  query LiftutleiePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "liftutleie-page" } }) {
      frontmatter {
        title
        heading
        subheading
        technicalInfo
      }
    }
  }
`;
