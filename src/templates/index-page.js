import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "../components/all.scss";
import Tjenester from "../components/Tjenester";

export const IndexPageTemplate = ({
  title,
  subtitle,
  forsidebilde,
  heading,
  subheading,
  info,
  image
}) => (
  <div className='content'>
    <div
      className='full-width-image-container margin-top-0 site-hero'
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
          !!forsidebilde.childImageSharp
            ? forsidebilde.childImageSharp.fluid.src
            : forsidebilde
        })`
      }}
    >
      <Navbar />
      <h2 className='has-text-weight-bold is-size-2'>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
    <div className='container'>
      <section className='section is-large' id='companyInfo'>
        <div className='columns'>
          <div className='column'>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <p>{info}</p>
          </div>
          <div className='column'>
            <img src='https://hope.as/wp-content/uploads/2017/04/home-img-1-600x450.jpg' />
          </div>
        </div>
      </section>
    </div>
    <Tjenester />
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  forsidebilde: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  info: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        forsidebilde={frontmatter.forsidebilde}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        info={frontmatter.info}
        image={frontmatter.image}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        forsidebilde {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        info
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
