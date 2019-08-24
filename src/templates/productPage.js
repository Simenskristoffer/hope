import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Tjenester from "../components/Tjenester";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

export const ProductPageTemplate = ({
  title,
  heading,
  forsidebilde,
  technicalInfo,
  subheading,
  images
}) => {
  return (
    <div className='content'>
      <Hero title={title} img={forsidebilde} />
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
      {images !== undefined && images.length > 0 ? (
        <Portfolio imageObjects={images} />
      ) : (
        <></>
      )}
      <Tjenester />
    </div>
  );
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  forsidebilde: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  technicalInfo: PropTypes.object,
  images: PropTypes.array
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        forsidebilde={frontmatter.forsidebilde}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        technicalInfo={frontmatter.technicalInfo}
        images={frontmatter.allImages}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const pageQuery = graphql`
  query ProductPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        forsidebilde {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        heading
        subheading
        technicalInfo
        allImages {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
