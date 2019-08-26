import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import "../components/all.scss";
import Employees from "../components/Employees";
import Hero from "../components/Hero";

export const AboutPageTemplate = ({
  title,
  subtitle,
  forsidebilde,
  seoDescription,
  heading,
  subheading,
  technicalInfo,
  pageImage,
  products,
  team
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
            <p>{technicalInfo}</p>
            <ul>
              {products.map(product => (
                <li className='has-text-left'>{product}</li>
              ))}
            </ul>
          </div>
          <div className='column'>
            <Img fluid={pageImage.childImageSharp.fluid} />
          </div>
        </div>
      </section>
      <Employees team={team} />
    </div>
  </div>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  seoDescription: PropTypes.string,
  forsidebilde: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  technicalInfo: PropTypes.string,
  pageImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  team: PropTypes.array,
  products: PropTypes.array
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        forsidebilde={frontmatter.forsidebilde}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        seoDescription={frontmatter.seoDescription}
        technicalInfo={frontmatter.technicalInfo}
        pageImage={frontmatter.pageImage}
        team={frontmatter.team}
        products={frontmatter.products}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seoDescription
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
        pageImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        technicalInfo
        products
        team {
          name
          info
          img {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
