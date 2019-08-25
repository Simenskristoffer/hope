import React from "react";
import PropTypes from "prop-types";
import { ProductPageTemplate } from "../../templates/productPage";

const ProductPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ProductPageTemplate
        title={data.title}
        forsidebilde={data.image}
        heading={data.heading}
        technicalInfo={data.technicalInfo}
        subheading={data.subheading}
        images={data.images}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProductPagePreview;
