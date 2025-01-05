import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./carousel.css";

function CustomCarousel() {
  const handleCustomize = () => {
    alert("Customize button clicked!");
  };

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path-to-image1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description of the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path-to-image2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Description of the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path-to-image3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Description of the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="customize-button-container">
        <Button variant="primary" onClick={handleCustomize}>
          Customize
        </Button>
      </div>
    </div>
  );
}

export default CustomCarousel;
