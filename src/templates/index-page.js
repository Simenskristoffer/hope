import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import "../components/all.scss";
import Tjenester from "../components/Tjenester";
import Hero from "../components/Hero";

export const IndexPageTemplate = ({
  title,
  subtitle,
  forsidebilde,
  seoDescription,
  heading,
  subheading,
  info,
  image
}) => (
  <div className='content'>
    <Helmet>
      <meta charSet='utf-8' />
      <title>{`Eivind Hope AS - ${title}`}</title>
      <meta name='description' content={seoDescription} />
    </Helmet>
    <Hero title={title} subtitle={subtitle} img={forsidebilde} />
    <div className='container'>
      <section className='section is-large' id='companyInfo'>
        <div className='columns'>
          <div className='column'>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <p>{info}</p>
          </div>
          <div className='column'>
            <Img fluid={image.childImageSharp.fluid} alt='Eivind Hope AS' />
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
  seoDescription: PropTypes.string,
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
        seoDescription={frontmatter.seoDescription}
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
        seoDescription
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
