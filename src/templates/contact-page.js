import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { IoMdMail } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";

import Layout from "../components/Layout";
import "../components/all.scss";
import Employees from "../components/Employees";
import Hero from "../components/Hero";

export const ContactPageTemplate = ({
  title,
  subtitle,
  forsidebilde,
  seoDescription,
  adress,
  email,
  phone,
  phone1,
  technicalInfo,
  pageImage,
  products,
  team
}) => {
  return (
    <div className='content'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`Eivind Hope AS - ${title}`}</title>
        <meta name='description' content={seoDescription} />
      </Helmet>
      <Hero title={title} subtitle={subtitle} img={forsidebilde} />
      <div className='container'>
        <section className='section is-large' id='contact'>
          <div className='columns'>
            <div className='column has-text-centered'>
              <TiLocation
                size={60}
                style={{
                  border: "1px solid",
                  borderRadius: "5px",
                  borderSpacing: "15px"
                }}
              />
              <h2 className='title'>Adresse</h2>
              <p className='subtitle'>{adress}</p>
            </div>
            <a className='subtitle' href={"mailto:" + email}>
              <div className='column has-text-centered'>
                <IoMdMail
                  size={60}
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
                <h2 className='title'>E-post</h2>
                <p className='subtitle'>
                  <a className='subtitle' href={"mailto:" + email}>
                    Send mail til: {email}
                  </a>
                </p>
              </div>
            </a>
            <div className='column has-text-centered'>
              <a href={"tel:" + phone}>
                <TiPhone
                  size={60}
                  style={{
                    border: "1px solid",
                    borderRadius: "5px"
                  }}
                />
              </a>
              <h2 className='title'>Telefon</h2>
              <p className='subtitle'>Ring oss</p>
              <p className='subtitle'>
                <a className='subtitle' href={"tel:" + phone}>
                  {phone}
                </a>
              </p>
              <p className='subtitle'>
                <a className='subtitle' href={"tel:" + phone1}>
                  {phone1}
                </a>
              </p>
            </div>
          </div>
        </section>
        <Employees team={team} />
      </div>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  seoDescription: PropTypes.string,
  forsidebilde: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  technicalInfo: PropTypes.string,
  adress: PropTypes.string,
  email: PropTypes.string,
  team: PropTypes.array,
  phone: PropTypes.string,
  phone1: PropTypes.string
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        forsidebilde={frontmatter.forsidebilde}
        seoDescription={frontmatter.seoDescription}
        technicalInfo={frontmatter.technicalInfo}
        pageImage={frontmatter.pageImage}
        team={frontmatter.team}
        adress={frontmatter.adress}
        email={frontmatter.email}
        phone={frontmatter.phone}
        phone1={frontmatter.phone1}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate($id: String!) {
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
        technicalInfo
        adress
        email
        phone
        phone1
        team {
          name
          info
          mobile
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
