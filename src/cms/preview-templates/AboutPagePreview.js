import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <AboutPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        seoDescription={data.seoDescription}
        technicalInfo={data.technicalInfo}
        forsidebilde={data.forsidebilde}
        heading={data.heading}
        subheading={data.subheading}
        pageImage={data.pageImage}
        products={data.products}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default AboutPagePreview;
