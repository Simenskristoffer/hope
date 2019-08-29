import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Img from "gatsby-image";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentImageIndex: null,
      imageNumber: 0
    };
  }

  toggleModal(index) {
    this.setState({ currentImageIndex: index });
  }
  getReactImagesArray(imageObjects) {
    let newImageArray = [];
    if (imageObjects) {
      imageObjects.forEach(imageObject => {
        let newObject = { src: imageObject.childImageSharp.fluid.src };
        newImageArray.push(newObject);
      });
    }
    return newImageArray;
  }

  render() {
    const { currentImageIndex } = this.state;
    const { imageObjects } = this.props;
    console.log(this.getReactImagesArray(imageObjects));
    return (
      <>
        <section className='section images'>
          <div className='container'>
            <h1>Bilder</h1>
            <div className='columns is-multiline'>
              {imageObjects.map((image, index) => (
                <div
                  key={image.childImageSharp.src}
                  className='column is-3'
                  onClick={() => this.toggleModal(index)}
                >
                  <Img
                    fluid={image.childImageSharp.fluid}
                    alt='Eivind Hope produkter'
                    className='image-display'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ModalGateway>
          {Number.isInteger(currentImageIndex) ? (
            <Modal
              allowFullscreen={false}
              closeOnBackdropClick={false}
              onClose={() => this.toggleModal(null)}
            >
              <Carousel
                currentIndex={currentImageIndex}
                frameProps={{ autoSize: "height" }}
                views={this.getReactImagesArray(imageObjects)}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

// styles={{
//   blanket: base => ({
//     ...base,
//     backgroundColor: colors.N05
//   }),
//   positioner: base => ({
//     ...base,
//     display: "block"
//   })
// }}

// styles={{
//   container: base => ({
//     ...base,
//     height: "100vh"
//   }),
//   view: base => ({
//     ...base,
//     alignItems: "center",
//     display: "flex ",
//     height: "calc(100vh - 54px)",
//     justifyContent: "center",

//     [largeDevice]: {
//       padding: 20
//     },

//     "& > img": {
//       maxHeight: "calc(100vh - 94px)"
//     }
//   }),
//   navigationPrev: navButtonStyles,
//   navigationNext: navButtonStyles
// }}
