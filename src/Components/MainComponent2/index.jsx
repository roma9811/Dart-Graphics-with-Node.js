import React from "react";
import "./Main2.css";
import Cyrulik from "../../Assets/Images/cyrulik.png";
import T_Shirt from "../../Assets/Images/t-shirt.jpg";
import Odzyskano from "../../Assets/Images/Odzyskano.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainComponent2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="main2" id="portfolio_scroll">
      <div className="portfolio">
        <div className="portfolio_text">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-slide">
              <img src={Cyrulik} alt="Cyrulik"/>
            </div>
            <div className="carousel-slide">
              <img src={T_Shirt} alt="T-Shirt" />
            </div>
            <div className="carousel-slide">
              <img src={Odzyskano} alt="Odzyskano" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
