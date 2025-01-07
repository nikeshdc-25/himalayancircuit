import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./carousel.css";
import himalayan from "../assets/homepageCarousel/best-tours-in-himalayas.jpg";
import chitwan from "../assets/homepageCarousel/chitwan-safari-in-nepal.jpg";
import dhampus from "../assets/homepageCarousel/dhampus-valley.jpg";
import culture from "../assets/homepageCarousel/immerse-with-culture.jpg";
import jungle from "../assets/homepageCarousel/jungles-and-wildlife.jpg";
import climbing from "../assets/homepageCarousel/peak-climbing.jpg";
import trekking from "../assets/homepageCarousel/trekking-with-himalayan-circuit.jpg";


function CustomCarousel() {

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={himalayan}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>BEST TOURS AROUND HIMALAYAS</h2>
            <p>Curating Personalized Experiences.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={chitwan}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>LUXURY TOURS IN NEPAL</h2>
            <p>Creating Ideal Vacation Experiences.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dhampus}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>BESPOKE TREKKING IN NEPAL</h2>
            <p>Customized Trails For You And Your Family.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={culture}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h2>IMMERSE WITH CULTURE</h2>
            <p>Enlighten Your Culture.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jungle}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h2>JUNGLES AND WILDLIFE</h2>
            <p>Explore Diversity Around The Himalayas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={climbing}
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h2>CLIMBING PEAKS</h2>
            <p>Trials Beyond The Trekking Trials.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trekking}
            alt="Seventh slide"
          />
          <Carousel.Caption>
            <h2>BESPOKE TRAVEL IN NEPAL</h2>
            <p>The Ultimate Trip Planner In Nepal.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
